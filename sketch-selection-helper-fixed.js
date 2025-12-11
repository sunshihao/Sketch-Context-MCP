// 备用修复方案：使用NSObject.extend（如果MOClassDescription不可用）
// 将此函数替换原来的createMessageHandler函数

function createMessageHandlerAlt(context, panel) {
  // 使用NSObject.extend创建Objective-C类
  var MessageHandlerClass = NSObject.extend({
    // Objective-C方法签名必须正确
    userContentController_didReceiveScriptMessage: function(controller, message) {
      try {
        var data = JSON.parse(message.body());
        var type = data.type;

        // 从存储的引用获取上下文
        var handlerContext = this._context || context;

        switch (type) {
          case "notify":
            // 需要定义showNotification函数
            if (typeof showNotification === 'function') {
              showNotification(data.message);
            }
            break;
          case "copy-selection":
            // 需要定义copySelectionIDs函数
            if (typeof copySelectionIDs === 'function') {
              copySelectionIDs();
            }
            break;
          case "refresh-selection":
            // 需要定义refreshSelection函数
            if (typeof refreshSelection === 'function') {
              refreshSelection(handlerContext);
            }
            break;
          case "execute-command":
            // 需要定义executeCommand函数
            if (typeof executeCommand === 'function') {
              executeCommand(data.id, data.command, data.params);
            }
            break;
          case "open-url":
            // 需要定义openURL函数
            if (typeof openURL === 'function') {
              openURL(data.url);
            }
            break;
          default:
            if (typeof log === 'function') {
              log("Unknown message type: " + type);
            }
        }
      } catch (error) {
        if (typeof log === 'function') {
          log("Error handling WebView message: " + error);
        }
      }
    }
  }, {
    // 类名
    name: "SketchContextMCPMessageHandler",

    // 定义暴露给Objective-C的方法
    exposedMethods: {
      "userContentController:didReceiveScriptMessage:": { returns: "void", params: ["id", "id"] }
    }
  });

  // 创建实例
  var handler = MessageHandlerClass.alloc().init();

  // 存储引用
  handler._context = context;
  handler._panel = panel;

  return handler;
}

// 简化版本：直接使用JavaScript对象但确保正确桥接
function createMessageHandlerSimple(context, panel) {
  // 创建一个普通对象
  var handler = {};

  // 添加Objective-C方法
  handler.userContentController_didReceiveScriptMessage = function(controller, message) {
    try {
      var data = JSON.parse(message.body());
      var type = data.type;

      switch (type) {
        case "notify":
          showNotification(data.message);
          break;
        case "copy-selection":
          copySelectionIDs();
          break;
        case "refresh-selection":
          refreshSelection(context);
          break;
        case "execute-command":
          executeCommand(data.id, data.command, data.params);
          break;
        case "open-url":
          openURL(data.url);
          break;
        default:
          log("Unknown message type: " + type);
      }
    } catch (error) {
      log("Error handling WebView message: " + error);
    }
  };

  // 在Sketch的CocoaScript中，JavaScript对象会自动桥接
  // 但需要确保方法签名正确
  return handler;
}
