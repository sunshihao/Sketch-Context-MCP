-------------------------------------
Translated Report (Full Report Below)
-------------------------------------
Process:             Sketch [23401]
Path:                /Applications/Sketch.app/Contents/MacOS/Sketch
Identifier:          com.bohemiancoding.sketch3
Version:             2025.1.4 (203504)
Code Type:           ARM-64 (Native)
Role:                Foreground
Parent Process:      launchd [1]
Coalition:           com.bohemiancoding.sketch3 [4008]
User ID:             501

Date/Time:           2025-12-11 14:55:45.9574 +0800
Launch Time:         2025-12-11 14:55:37.3505 +0800
Hardware Model:      Mac16,10
OS Version:          macOS 26.1 (25B78)
Release Type:        User

Crash Reporter Key:  D1D53AAB-697E-EA39-5718-76F5271137CC
Incident Identifier: EA6D13C2-DA99-45BB-8802-4A97A862263F

Sleep/Wake UUID:       98579BCF-EACA-4C6B-974B-09772A683933

Time Awake Since Boot: 18000 seconds
Time Since Wake:       907 seconds

System Integrity Protection: enabled

Triggered by Thread: 0, Dispatch Queue: com.apple.main-thread

Exception Type:    EXC_CRASH (SIGABRT)
Exception Codes:   0x0000000000000000, 0x0000000000000000
Exception Reason:  -[__NSFrozenDictionaryM userContentController:didReceiveScriptMessage:]: unrecognized selector sent to instance 0x7b1d16040


Application Specific Information:
abort() called


Last Exception Backtrace:
0   CoreFoundation                	       0x194ad98d0 __exceptionPreprocess + 164
1   libobjc.A.dylib               	       0x1945b2418 objc_exception_throw + 88
2   CoreFoundation                	       0x194bb9dd4 +[NSObject(NSObject) instanceMethodSignatureForSelector:] + 0
3   CoreFoundation                	       0x194a76ef8 ___forwarding___ + 1480
4   CoreFoundation                	       0x194a76870 _CF_forwarding_prep_0 + 96
5   WebKit                        	       0x1be3fbc9c ScriptMessageHandlerDelegate::didPostMessage(WebKit::WebPageProxy&, WebKit::FrameInfoData&&, API::ContentWorld&, WebKit::JavaScriptEvaluationResult&&) + 328
6   WebKit                        	       0x1bea6626c WebKit::WebUserContentControllerProxy::didPostMessage(WTF::ObjectIdentifierGeneric<WebKit::WebPageProxyIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::FrameInfoData&&, WTF::ObjectIdentifierGeneric<WebKit::ScriptMessageHandlerIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::JavaScriptEvaluationResult&&, WTF::CompletionHandler<void (std::experimental::fundamentals_v3::expected<WebKit::JavaScriptEvaluationResult, WTF::String>&&)>&&) + 736
7   WebKit                        	       0x1be3fe918 WebKit::WebUserContentControllerProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&) + 1088
8   WebKit                        	       0x1befbcdd8 IPC::MessageReceiverMap::dispatchMessage(IPC::Connection&, IPC::Decoder&) + 264
9   WebKit                        	       0x1be99b8b0 WebKit::WebProcessProxy::dispatchMessage(IPC::Connection&, IPC::Decoder&) + 40
10  WebKit                        	       0x1be3c6614 WebKit::WebProcessProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&) + 1620
11  WebKit                        	       0x1bef964dc IPC::Connection::dispatchMessage(WTF::UniqueRef<IPC::Decoder>) + 300
12  WebKit                        	       0x1bef96a0c IPC::Connection::dispatchIncomingMessages() + 536
13  JavaScriptCore                	       0x1b5fab1d8 WTF::RunLoop::performWork() + 552
14  JavaScriptCore                	       0x1b5facbd0 WTF::RunLoop::performWork(void*) + 36
15  CoreFoundation                	       0x194a8c9e8 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 28
16  CoreFoundation                	       0x194a8c97c __CFRunLoopDoSource0 + 172
17  CoreFoundation                	       0x194a8c6e8 __CFRunLoopDoSources0 + 232
18  CoreFoundation                	       0x194a8b378 __CFRunLoopRun + 820
19  CoreFoundation                	       0x194b4535c _CFRunLoopRunSpecificWithOptions + 532
20  HIToolbox                     	       0x1a1548768 RunCurrentEventLoopInMode + 316
21  HIToolbox                     	       0x1a154ba90 ReceiveNextEventCommon + 488
22  HIToolbox                     	       0x1a16d5308 _BlockUntilNextEventMatchingListInMode + 48
23  AppKit                        	       0x19939c3c0 _DPSBlockUntilNextEventMatchingListInMode + 236
24  AppKit                        	       0x198e95e34 _DPSNextEvent + 588
25  AppKit                        	       0x199963f44 -[NSApplication(NSEventRouting) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 688
26  AppKit                        	       0x199963c50 -[NSApplication(NSEventRouting) nextEventMatchingMask:untilDate:inMode:dequeue:] + 72
27  AppKit                        	       0x198e8e780 -[NSApplication run] + 368
28  AppKit                        	       0x198e7a6dc NSApplicationMain + 880
29  dyld                          	       0x194625d54 start + 7184

Thread 0 Crashed::  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib        	       0x1949b35b0 __pthread_kill + 8
1   libsystem_pthread.dylib       	       0x1949ed888 pthread_kill + 296
2   libsystem_c.dylib             	       0x1948f2850 abort + 124
3   libc++abi.dylib               	       0x1949a1858 __abort_message + 132
4   libc++abi.dylib               	       0x1949904d4 demangling_terminate_handler() + 304
5   libobjc.A.dylib               	       0x1945bc414 _objc_terminate() + 156
6   Bugsnag                       	       0x1055db1e4 CPPExceptionTerminate() + 504
7   libc++abi.dylib               	       0x1949a0c2c std::__terminate(void (*)()) + 16
8   libc++abi.dylib               	       0x1949a4394 __cxxabiv1::failed_throw(__cxxabiv1::__cxa_exception*) + 88
9   libc++abi.dylib               	       0x1949a433c __cxa_throw + 92
10  libobjc.A.dylib               	       0x1945b2580 objc_exception_throw + 448
11  CoreFoundation                	       0x194bb9dd4 -[NSObject(NSObject) doesNotRecognizeSelector:] + 364
12  CoreFoundation                	       0x194a76ef8 ___forwarding___ + 1480
13  CoreFoundation                	       0x194a76870 _CF_forwarding_prep_0 + 96
14  WebKit                        	       0x1be3fbc9c ScriptMessageHandlerDelegate::didPostMessage(WebKit::WebPageProxy&, WebKit::FrameInfoData&&, API::ContentWorld&, WebKit::JavaScriptEvaluationResult&&) + 328
15  WebKit                        	       0x1bea6626c WebKit::WebUserContentControllerProxy::didPostMessage(WTF::ObjectIdentifierGeneric<WebKit::WebPageProxyIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::FrameInfoData&&, WTF::ObjectIdentifierGeneric<WebKit::ScriptMessageHandlerIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::JavaScriptEvaluationResult&&, WTF::CompletionHandler<void (std::experimental::fundamentals_v3::expected<WebKit::JavaScriptEvaluationResult, WTF::String>&&)>&&) + 736
16  WebKit                        	       0x1be3fe918 WebKit::WebUserContentControllerProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&) + 1088
17  WebKit                        	       0x1befbcdd8 IPC::MessageReceiverMap::dispatchMessage(IPC::Connection&, IPC::Decoder&) + 264
18  WebKit                        	       0x1be99b8b0 WebKit::WebProcessProxy::dispatchMessage(IPC::Connection&, IPC::Decoder&) + 40
19  WebKit                        	       0x1be3c6614 WebKit::WebProcessProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&) + 1620
20  WebKit                        	       0x1bef964dc IPC::Connection::dispatchMessage(WTF::UniqueRef<IPC::Decoder>) + 300
21  WebKit                        	       0x1bef96a0c IPC::Connection::dispatchIncomingMessages() + 536
22  JavaScriptCore                	       0x1b5fab1d8 WTF::RunLoop::performWork() + 552
23  JavaScriptCore                	       0x1b5facbd0 WTF::RunLoop::performWork(void*) + 36
24  CoreFoundation                	       0x194a8c9e8 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 28
25  CoreFoundation                	       0x194a8c97c __CFRunLoopDoSource0 + 172
26  CoreFoundation                	       0x194a8c6e8 __CFRunLoopDoSources0 + 232
27  CoreFoundation                	       0x194a8b378 __CFRunLoopRun + 820
28  CoreFoundation                	       0x194b4535c _CFRunLoopRunSpecificWithOptions + 532
29  HIToolbox                     	       0x1a1548768 RunCurrentEventLoopInMode + 316
30  HIToolbox                     	       0x1a154ba90 ReceiveNextEventCommon + 488
31  HIToolbox                     	       0x1a16d5308 _BlockUntilNextEventMatchingListInMode + 48
32  AppKit                        	       0x19939c3c0 _DPSBlockUntilNextEventMatchingListInMode + 236
33  AppKit                        	       0x198e95e34 _DPSNextEvent + 588
34  AppKit                        	       0x199963f44 -[NSApplication(NSEventRouting) _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 688
35  AppKit                        	       0x199963c50 -[NSApplication(NSEventRouting) nextEventMatchingMask:untilDate:inMode:dequeue:] + 72
36  AppKit                        	       0x198e8e780 -[NSApplication run] + 368
37  AppKit                        	       0x198e7a6dc NSApplicationMain + 880
38  dyld                          	       0x194625d54 start + 7184

Thread 1:

Thread 2:: com.apple.NSEventThread
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949b398c mach_msg_overwrite + 484
3   libsystem_kernel.dylib        	       0x1949aafb4 mach_msg + 24
4   CoreFoundation                	       0x194a8cb90 __CFRunLoopServiceMachPort + 160
5   CoreFoundation                	       0x194a8b4e8 __CFRunLoopRun + 1188
6   CoreFoundation                	       0x194b4535c _CFRunLoopRunSpecificWithOptions + 532
7   AppKit                        	       0x198f25cb4 _NSEventThread + 184
8   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
9   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 3:: KSCrash Exception Handler (Secondary)
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949da7f4 thread_suspend + 108
3   Bugsnag                       	       0x1055e0cc4 ksmachexc_i_handleExceptions + 104
4   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
5   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 4:: KSCrash Exception Handler (Primary)
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949b398c mach_msg_overwrite + 484
3   libsystem_kernel.dylib        	       0x1949aafb4 mach_msg + 24
4   Bugsnag                       	       0x1055e0ce8 ksmachexc_i_handleExceptions + 140
5   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
6   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 5:: com.bugsnag.app-hang-detector
0   libsystem_kernel.dylib        	       0x1949aabc8 semaphore_timedwait_trap + 8
1   libdispatch.dylib             	       0x194865c84 _dispatch_sema4_timedwait + 64
2   libdispatch.dylib             	       0x194832f08 _dispatch_semaphore_wait_slow + 76
3   Bugsnag                       	       0x1055e5738 -[BSGAppHangDetector detectAppHangs] + 232
4   Foundation                    	       0x19629d7a0 __NSThread__start__ + 732
5   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
6   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 6:: JavaScriptCore libpas scavenger
0   libsystem_kernel.dylib        	       0x1949ae4f8 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x1949ee0dc _pthread_cond_wait + 984
2   JavaScriptCore                	       0x1b76afe78 scavenger_thread_main + 1440
3   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
4   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 7:: Heap Helper Thread
0   libsystem_kernel.dylib        	       0x1949ae4f8 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x1949ee0dc _pthread_cond_wait + 984
2   JavaScriptCore                	       0x1b5ff1b68 WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime) + 240
3   JavaScriptCore                	       0x1b5fa18e0 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 4156
4   JavaScriptCore                	       0x1b5f52574 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 472
5   JavaScriptCore                	       0x1b5feee5c WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 260
6   JavaScriptCore                	       0x1b5db9490 WTF::wtfThreadEntryPoint(void*) + 16
7   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
8   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 8:: Heap Helper Thread
0   libsystem_kernel.dylib        	       0x1949ae4f8 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x1949ee0dc _pthread_cond_wait + 984
2   JavaScriptCore                	       0x1b5ff1b68 WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime) + 240
3   JavaScriptCore                	       0x1b5fa18e0 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 4156
4   JavaScriptCore                	       0x1b5f52574 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 472
5   JavaScriptCore                	       0x1b5feee5c WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 260
6   JavaScriptCore                	       0x1b5db9490 WTF::wtfThreadEntryPoint(void*) + 16
7   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
8   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 9:: Heap Helper Thread
0   libsystem_kernel.dylib        	       0x1949ae4f8 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x1949ee0dc _pthread_cond_wait + 984
2   JavaScriptCore                	       0x1b5ff1b68 WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime) + 240
3   JavaScriptCore                	       0x1b5fa18e0 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 4156
4   JavaScriptCore                	       0x1b5f52574 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 472
5   JavaScriptCore                	       0x1b5feee5c WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 260
6   JavaScriptCore                	       0x1b5db9490 WTF::wtfThreadEntryPoint(void*) + 16
7   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
8   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 10:

Thread 11:

Thread 12:

Thread 13:

Thread 14:

Thread 15:

Thread 16:: com.apple.NSURLConnectionLoader
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949b398c mach_msg_overwrite + 484
3   libsystem_kernel.dylib        	       0x1949aafb4 mach_msg + 24
4   CoreFoundation                	       0x194a8cb90 __CFRunLoopServiceMachPort + 160
5   CoreFoundation                	       0x194a8b4e8 __CFRunLoopRun + 1188
6   CoreFoundation                	       0x194b4535c _CFRunLoopRunSpecificWithOptions + 532
7   CFNetwork                     	       0x19af6eff8 +[__CFN_CoreSchedulingSetRunnable _run:] + 416
8   Foundation                    	       0x19629d7a0 __NSThread__start__ + 732
9   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
10  libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 17:: com.apple.CFSocket.private
0   libsystem_kernel.dylib        	       0x1949b5e54 __select + 8
1   CoreFoundation                	       0x194aa4254 __CFSocketManager + 708
2   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
3   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 18:

Thread 19::  Dispatch queue: com.bugsnag.event-uploader (QOS: UNSPECIFIED)
0   dyld                          	       0x1946789d4 dyld3::MachOLoaded::findClosestSymbol(unsigned long long, char const**, unsigned long long*) const + 424
1   dyld                          	       0x19465af24 dyld4::APIs::dladdr(void const*, dl_info*) + 236
2   Bugsnag                       	       0x1055c4498 -[BugsnagStackframe symbolicateIfNeeded] + 84
3   Bugsnag                       	       0x1055d7af4 -[BugsnagEvent symbolicateIfNeeded] + 544
4   Bugsnag                       	       0x1055d97dc -[BSGEventUploadObjectOperation loadEventAndReturnError:] + 36
5   Bugsnag                       	       0x1055e3c8c -[BSGEventUploadOperation runWithDelegate:completionHandler:] + 96
6   Bugsnag                       	       0x1055e45a0 -[BSGEventUploadOperation start] + 260
7   Foundation                    	       0x196294080 __NSOPERATIONQUEUE_IS_STARTING_AN_OPERATION__ + 16
8   Foundation                    	       0x196293f70 __NSOQSchedule_f + 164
9   libdispatch.dylib             	       0x1948404d0 _dispatch_block_async_invoke2 + 148
10  libdispatch.dylib             	       0x19484aac4 _dispatch_client_callout + 16
11  libdispatch.dylib             	       0x1948356e4 _dispatch_continuation_pop + 596
12  libdispatch.dylib             	       0x194834d58 _dispatch_async_redirect_invoke + 580
13  libdispatch.dylib             	       0x194842fc8 _dispatch_root_queue_drain + 364
14  libdispatch.dylib             	       0x194843784 _dispatch_worker_thread2 + 180
15  libsystem_pthread.dylib       	       0x1949e9e10 _pthread_wqthread + 232
16  libsystem_pthread.dylib       	       0x1949e8b9c start_wqthread + 8

Thread 20:

Thread 21:: WebCore: Scrolling
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949b398c mach_msg_overwrite + 484
3   libsystem_kernel.dylib        	       0x1949aafb4 mach_msg + 24
4   CoreFoundation                	       0x194a8cb90 __CFRunLoopServiceMachPort + 160
5   CoreFoundation                	       0x194a8b4e8 __CFRunLoopRun + 1188
6   CoreFoundation                	       0x194b4535c _CFRunLoopRunSpecificWithOptions + 532
7   CoreFoundation                	       0x194adea30 CFRunLoopRun + 64
8   JavaScriptCore                	       0x1b5fac198 WTF::Detail::CallableWrapper<WTF::RunLoop::create(WTF::ASCIILiteral, WTF::ThreadType, WTF::Thread::QOS)::$_0, void>::call() + 244
9   JavaScriptCore                	       0x1b5feee5c WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 260
10  JavaScriptCore                	       0x1b5db9490 WTF::wtfThreadEntryPoint(void*) + 16
11  libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
12  libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 22:: CVDisplayLink
0   libsystem_kernel.dylib        	       0x1949ae4f8 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x1949ee108 _pthread_cond_wait + 1028
2   CoreVideo                     	       0x19effdb3c CVDisplayLink::waitUntil(unsigned long long) + 336
3   CoreVideo                     	       0x19effcc24 CVDisplayLink::runIOThread() + 500
4   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
5   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 23:: Log work queue
0   libsystem_kernel.dylib        	       0x1949aabb0 semaphore_wait_trap + 8
1   WebKit                        	       0x1befc26b4 IPC::StreamConnectionWorkQueue::startProcessingThread()::$_0::operator()() + 44
2   JavaScriptCore                	       0x1b5feee5c WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 260
3   JavaScriptCore                	       0x1b5db9490 WTF::wtfThreadEntryPoint(void*) + 16
4   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
5   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8

Thread 24:: HIE: M_ e305e8a6642a28f8 2025-12-11 14:55:45.949
0   libsystem_kernel.dylib        	       0x1949aac34 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x1949bd028 mach_msg2_internal + 76
2   libsystem_kernel.dylib        	       0x1949da7f4 thread_suspend + 108
3   HIServices                    	       0x19c088488 SOME_OTHER_THREAD_SWALLOWED_AT_LEAST_ONE_EXCEPTION + 20
4   Foundation                    	       0x19629d7a0 __NSThread__start__ + 732
5   libsystem_pthread.dylib       	       0x1949edc08 _pthread_start + 136
6   libsystem_pthread.dylib       	       0x1949e8ba8 thread_start + 8


Thread 0 crashed with ARM Thread State (64-bit):
    x0: 0x0000000000000000   x1: 0x0000000000000000   x2: 0x0000000000000000   x3: 0x0000000000000000
    x4: 0x00000001949a6007   x5: 0x000000016b517e80   x6: 0x000000000000006e   x7: 0xfffff0003ffff800
    x8: 0x64f0698f8a9002d4   x9: 0x64f0698d8baba254  x10: 0x0000000000000002  x11: 0x0000010000000000
   x12: 0x00000000fffffffd  x13: 0x0000000000000000  x14: 0x0000000000000000  x15: 0x0000000000000000
   x16: 0x0000000000000148  x17: 0x00000002029b53e0  x18: 0x0000000000000000  x19: 0x0000000000000006
   x20: 0x0000000000000103  x21: 0x00000002013ba160  x22: 0x00000001ff2ac000  x23: 0x0000000000000001
   x24: 0x0000000000000001  x25: 0x0000000000000068  x26: 0x000000016b519390  x27: 0x00000002013b26b0
   x28: 0x0000000000003233   fp: 0x000000016b517df0   lr: 0x00000001949ed888
    sp: 0x000000016b517dd0   pc: 0x00000001949b35b0 cpsr: 0x40000000
   far: 0x0000000000000000  esr: 0x56000080 (Syscall)

Binary Images:
       0x1048e4000 -        0x10525bfff com.bohemiancoding.sketch3 (2025.1.4) <6a731ada-af4d-3cfc-a230-5a5b39e54eb9> /Applications/Sketch.app/Contents/MacOS/Sketch
       0x105564000 -        0x105577fff com.bohemiancoding.SecureReceiptKit (1.0) <8e159d1f-1641-3e85-b99b-4070710e942d> /Applications/Sketch.app/Contents/Frameworks/SecureReceiptKit.framework/Versions/A/SecureReceiptKit
       0x1056e8000 -        0x105763fff com.bohemiancoding.WebP (*) <1a3379f9-eb79-308e-a7b2-489a25ed647f> /Applications/Sketch.app/Contents/Frameworks/WebP.framework/Versions/A/WebP
       0x105594000 -        0x10559ffff com.bohemiancoding.zxcvbn.Zxcvbn (1.0) <d12e1ee3-d402-3a8b-99f1-531eefd29419> /Applications/Sketch.app/Contents/Frameworks/Zxcvbn.framework/Versions/A/Zxcvbn
       0x105508000 -        0x105523fff com.bohemiancoding.SketchPluginManager (1.0) <fdfd0560-c3e6-3141-bd97-9e16e5b9513f> /Applications/Sketch.app/Contents/Frameworks/SketchPluginManager.framework/Versions/A/SketchPluginManager
       0x105544000 -        0x105547fff flex.Flex (1.0) <95f808e6-0fb2-3597-a49b-e6f0f14e6929> /Applications/Sketch.app/Contents/Frameworks/Flex_5CCDA29C3_PackageProduct.framework/Versions/A/Flex_5CCDA29C3_PackageProduct
       0x10660c000 -        0x106a57fff com.bohemiancoding.SketchPrototyping (1.0) <595814e0-d5b6-3186-8aee-611c176780d6> /Applications/Sketch.app/Contents/Frameworks/SketchPrototyping.framework/Versions/A/SketchPrototyping
       0x1055b4000 -        0x105607fff com.bugsnag.Bugsnag (6.12.0) <4774ab16-330c-3bb7-8fe8-6b28c223cead> /Applications/Sketch.app/Contents/Frameworks/Bugsnag.framework/Versions/A/Bugsnag
       0x106c1c000 -        0x106ee3fff com.bohemiancoding.SketchQL (1.0) <551776fe-941c-352f-bf04-bcaa02cb24fa> /Applications/Sketch.app/Contents/Frameworks/SketchQL.framework/Versions/A/SketchQL
       0x105cc4000 -        0x105deffff com.bohemiancoding.BCFoundation (1.0) <4e5a33b3-d4b0-33d5-86fe-c6b1e622f7f6> /Applications/Sketch.app/Contents/Frameworks/BCFoundation.framework/Versions/A/BCFoundation
       0x10594c000 -        0x1059a7fff com.bohemiancoding.Chocolat (1.0) <3e19f26d-574e-35af-ba7e-13dc593f8296> /Applications/Sketch.app/Contents/Frameworks/Chocolat.framework/Versions/A/Chocolat
       0x105780000 -        0x10585bfff swift-collections.Collections (1.0) <98a4cde9-2763-3308-8a6f-cc3eb5018624> /Applications/Sketch.app/Contents/Frameworks/Collections_47BB0D94F2814A8A_PackageProduct.framework/Versions/A/Collections_47BB0D94F2814A8A_PackageProduct
       0x105658000 -        0x10569bfff com.bohemiancoding.SketchAnnotations (1.0) <4ce25c48-8880-3278-93b1-318e9abb56f8> /Applications/Sketch.app/Contents/Frameworks/SketchAnnotations.framework/Versions/A/SketchAnnotations
       0x1058a4000 -        0x1058bffff com.bohemiancoding.Clipper (1.0) <4751cacb-e49c-375b-bf43-0e0fe8211286> /Applications/Sketch.app/Contents/Frameworks/Clipper.framework/Versions/A/Clipper
       0x105b0c000 -        0x105b4bfff com.cocoascript.CocoaScript (*) <2149df52-4d4b-3995-a424-78f752826aa8> /Applications/Sketch.app/Contents/Frameworks/CocoaScript.framework/Versions/A/CocoaScript
       0x1056c4000 -        0x1056cffff me.rsms.peertalk.Peertalk (1.0) <c7aa6f4d-a927-35ba-89e3-3c98a39af6e6> /Applications/Sketch.app/Contents/Frameworks/PeertalkMac.framework/Versions/A/PeertalkMac
       0x106198000 -        0x106293fff com.bohemiancoding.cloud (1.0) <9beef690-8f44-313a-bedb-cd39fa871c0d> /Applications/Sketch.app/Contents/Frameworks/SketchCloudKit.framework/Versions/A/SketchCloudKit
       0x105b98000 -        0x105bcbfff com.kulakov.ShortcutRecorder (3.4.0) <c3bb3edc-f5d4-3ea7-88b3-3e14d436d66f> /Applications/Sketch.app/Contents/Frameworks/ShortcutRecorder.framework/Versions/A/ShortcutRecorder
       0x105a44000 -        0x105a53fff com.bohemiancoding.SketchFeatureFlags (1.0) <cc55bf87-1965-30af-a0f1-2db7aa10871f> /Applications/Sketch.app/Contents/Frameworks/SketchFeatureFlags.framework/Versions/A/SketchFeatureFlags
       0x105a68000 -        0x105aabfff org.sparkle-project.Sparkle (2.6.4) <0e273e3e-459c-3fa6-9a86-4754c5cc30ff> /Applications/Sketch.app/Contents/Frameworks/Sparkle.framework/Versions/B/Sparkle
       0x105e7c000 -        0x105fb7fff com.bohemiancoding.SharedEditing (1.0) <56e644af-6a06-366e-af1f-671546ea86ef> /Applications/Sketch.app/Contents/Frameworks/SharedEditing.framework/Versions/A/SharedEditing
       0x106038000 -        0x1060bffff swift-algorithms.Algorithms (1.0) <80a4bc02-aef8-34c5-aee9-ea6c5fc75169> /Applications/Sketch.app/Contents/Frameworks/Algorithms_-79BF82D738C97CDC_PackageProduct.framework/Versions/A/Algorithms_-79BF82D738C97CDC_PackageProduct
       0x107ab4000 -        0x107ddbfff com.bohemiancoding.SketchControllers (1.0) <663d5114-bdff-3f7a-aabf-3dc27a5c6360> /Applications/Sketch.app/Contents/Frameworks/SketchControllers.framework/Versions/A/SketchControllers
       0x1060fc000 -        0x10611ffff co.awkward.SketchMirrorServerKit (1.0) <f427ae6b-a379-39c6-86cb-a64d11613e5a> /Applications/Sketch.app/Contents/Frameworks/SketchMirrorServerKit.framework/Versions/A/SketchMirrorServerKit
       0x107114000 -        0x10760ffff com.bohemiancoding.SketchModel (1.0) <7f59ebe7-95a0-3a07-b030-466db52b88a4> /Applications/Sketch.app/Contents/Frameworks/SketchModel.framework/Versions/A/SketchModel
       0x105a00000 -        0x105a1bfff com.bohemiancoding.SketchPDF (1.0) <2573a2c9-ebf7-3fbf-a52a-c56bfe0cfb60> /Applications/Sketch.app/Contents/Frameworks/SketchPDF.framework/Versions/A/SketchPDF
       0x10632c000 -        0x1064effff com.bohemiancoding.SketchRendering (1.0) <423ebb54-96fa-38b8-b92a-2311d6e21fa0> /Applications/Sketch.app/Contents/Frameworks/SketchRendering.framework/Versions/A/SketchRendering
       0x105ad0000 -        0x105ae7fff combine-schedulers.CombineSchedulers (1.0) <6058bf1c-5d6f-31ab-867a-d7ee31e80055> /Applications/Sketch.app/Contents/Frameworks/CombineSchedulers_-54F188414C11E20_PackageProduct.framework/Versions/A/CombineSchedulers_-54F188414C11E20_PackageProduct
       0x105c38000 -        0x105c3ffff com.bohemiancoding.SketchMirrorTalk (1.0) <8d9c22b1-5997-3c47-987a-56e39accff70> /Applications/Sketch.app/Contents/Frameworks/SketchMirrorTalk.framework/Versions/A/SketchMirrorTalk
       0x107990000 -        0x1079dffff com.bohemiancoding.SketchSVG (1.0) <86ea44d0-e055-3c32-afc7-4362562982dd> /Applications/Sketch.app/Contents/Frameworks/SketchSVG.framework/Versions/A/SketchSVG
       0x105c54000 -        0x105c87fff com.bohemiancoding.BCLayerList (1.0) <66713812-93cc-3ecd-b601-de3dadcdc281> /Applications/Sketch.app/Contents/Frameworks/BCLayerList.framework/Versions/A/BCLayerList
       0x105c04000 -        0x105c0bfff swift-collections.InternalCollectionsUtilities (1.0) <cad2e302-afc9-3643-95aa-282349dc75f9> /Applications/Sketch.app/Contents/Frameworks/InternalCollectionsUtilities.framework/Versions/A/InternalCollectionsUtilities
       0x10614c000 -        0x106173fff swift-collections.OrderedCollections (1.0) <2d8fd73c-9d54-3ead-bf5f-bddf48f0335d> /Applications/Sketch.app/Contents/Frameworks/OrderedCollections.framework/Versions/A/OrderedCollections
       0x1078b8000 -        0x1078cbfff swift-collections.DequeModule (1.0) <295b6821-a0ec-3ab2-bba8-beafc5a0064c> /Applications/Sketch.app/Contents/Frameworks/DequeModule.framework/Versions/A/DequeModule
       0x107898000 -        0x10789ffff swift-numerics.RealModule (1.0) <51ade87d-faf8-3c7f-b384-ae667aad631d> /Applications/Sketch.app/Contents/Frameworks/RealModule_20918C39686D2FF4_PackageProduct.framework/Versions/A/RealModule_20918C39686D2FF4_PackageProduct
       0x107860000 -        0x10786ffff yoga.yoga (1.0) <ff11c04f-e6ed-382b-bcc9-80434f90ad01> /Applications/Sketch.app/Contents/Frameworks/yoga_93A40DCF4_PackageProduct.framework/Versions/A/yoga_93A40DCF4_PackageProduct
       0x107934000 -        0x107947fff xctest-dynamic-overlay.XCTestDynamicOverlay (1.0) <6002fb2b-3590-315f-bf3c-58f6d902095b> /Applications/Sketch.app/Contents/Frameworks/XCTestDynamicOverlay_6187313334988FF6_PackageProduct.framework/Versions/A/XCTestDynamicOverlay_6187313334988FF6_PackageProduct
       0x10795c000 -        0x107967fff swift-concurrency-extras.ConcurrencyExtras (1.0) <b9b89728-3cb9-3c16-a0db-bf894db54c9b> /Applications/Sketch.app/Contents/Frameworks/ConcurrencyExtras_-2B4B167800F2E3ED_PackageProduct.framework/Versions/A/ConcurrencyExtras_-2B4B167800F2E3ED_PackageProduct
       0x1078e4000 -        0x107913fff libConfigurer64.dylib (*) <7e7a9b09-3265-3331-aab1-3a32cba90a2f> /Applications/Sketch.app/Contents/Resources/libConfigurer64.dylib
       0x107a28000 -        0x107a4bfff net.pol-online.GCDWebServers (3.3.4) <e47472ba-60b7-3b86-8d12-35a5939600e5> /Applications/Sketch.app/Contents/Frameworks/GCDWebServers.framework/Versions/A/GCDWebServers
       0x110b20000 -        0x111347fff com.apple.AGXMetalG16G-B0 (341.11) <a22549f3-d4f5-3b88-af18-e06837f0d352> /System/Library/Extensions/AGXMetalG16G_B0.bundle/Contents/MacOS/AGXMetalG16G_B0
       0x1082a8000 -        0x1082b3fff libobjc-trampolines.dylib (*) <f8bd9069-8c4f-37ea-af9a-2b1060f54e4f> /usr/lib/libobjc-trampolines.dylib
       0x12fe08000 -        0x12fe0bfff Foundation.dylib (*) <7e3337de-4b13-3b6b-9c99-7722e2b761cd> /System/Library/Frameworks/Foundation.framework/Versions/C/Resources/BridgeSupport/Foundation.dylib
       0x12fe1c000 -        0x12fe1ffff CoreFoundation.dylib (*) <a6af9e40-e163-3998-9c50-95f1c261a3ec> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/Resources/BridgeSupport/CoreFoundation.dylib
       0x12fe30000 -        0x12fe33fff CoreGraphics.dylib (*) <22c223ca-d6e1-388e-8e3d-001842b09286> /System/Library/Frameworks/CoreGraphics.framework/Versions/A/Resources/BridgeSupport/CoreGraphics.dylib
       0x12fe40000 -        0x12fe43fff AppKit.dylib (*) <b15dac66-7a3d-30f0-8dd7-fd02854d1bb0> /System/Library/Frameworks/AppKit.framework/Versions/C/Resources/BridgeSupport/AppKit.dylib
       0x130310000 -        0x130413fff com.lanhuSketch.smallStone1 (4.1.0) <d7f3a778-d55f-3415-b696-b562e67a6504> /Users/USER/Library/Application Support/com.bohemiancoding.sketch3/*/Lanhu.framework/Lanhu
       0x141f08000 -        0x141f6bfff com.apple.AppleMetalOpenGLRenderer (1.0) <7fba6cd5-06ae-37aa-aa67-580c920ea69d> /System/Library/Extensions/AppleMetalOpenGLRenderer.bundle/Contents/MacOS/AppleMetalOpenGLRenderer
       0x1949aa000 -        0x1949e649f libsystem_kernel.dylib (*) <9fe7c84d-0c2b-363f-bee5-6fd76d67a227> /usr/lib/system/libsystem_kernel.dylib
       0x1949e7000 -        0x1949f3abb libsystem_pthread.dylib (*) <e95973b8-824c-361e-adf4-390747c40897> /usr/lib/system/libsystem_pthread.dylib
       0x194879000 -        0x1948fb047 libsystem_c.dylib (*) <9f5bd98b-9367-3594-933b-16f392c2a5f8> /usr/lib/system/libsystem_c.dylib
       0x19498f000 -        0x1949a992f libc++abi.dylib (*) <94052f7c-7016-32ff-9fef-eefae55a2adb> /usr/lib/libc++abi.dylib
       0x194598000 -        0x1945eb48b libobjc.A.dylib (*) <5a0aab4e-0c1a-3680-82c9-43dc4007a6e7> /usr/lib/libobjc.A.dylib
       0x194a2d000 -        0x194f73abf com.apple.CoreFoundation (6.9) <3c4a3add-9e48-33da-82ee-80520e6cbe3b> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
       0x1bdea0000 -        0x1bf3ba8bf com.apple.WebKit (21622) <3b55482a-efe2-35a7-b1c9-3f41a823a30b> /System/Library/Frameworks/WebKit.framework/Versions/A/WebKit
       0x1b5db2000 -        0x1b78d0e7f com.apple.JavaScriptCore (21622) <c79071c9-db50-3264-a316-94abd0d3b9a9> /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/JavaScriptCore
       0x1a1487000 -        0x1a17897ff com.apple.HIToolbox (2.1.1) <9ab64c08-0685-3a0d-9a7e-83e7a1e9ebb4> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/HIToolbox
       0x198e76000 -        0x19a5a2b9f com.apple.AppKit (6.9) <3c0949bb-e361-369a-80b7-17440eb09e98> /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit
       0x19461d000 -        0x1946bbf63 dyld (*) <b50f5a1a-be81-3068-92e1-3554f2be478a> /usr/lib/dyld
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
       0x19482f000 -        0x194875e9f libdispatch.dylib (*) <8fb392ae-401f-399a-96ae-41531cf91162> /usr/lib/system/libdispatch.dylib
       0x196277000 -        0x19721a25f com.apple.Foundation (6.9) <00467f1f-216a-36fe-8587-c820c7e0437d> /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
       0x19ad24000 -        0x19b0de1ff com.apple.CFNetwork (1.0) <4e62d7e8-e33e-3586-866a-5b6657b8e190> /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
       0x1aa54e000 -        0x1ac31ed7f com.apple.GeoServices (1.0) <061f8bbf-ba3b-30a3-a0a6-f0884c8a765c> /System/Library/PrivateFrameworks/GeoServices.framework/Versions/A/GeoServices
       0x1a9970000 -        0x1a9ddf93f com.apple.idsfoundation (10.0) <304ed5e5-b77d-30f4-b754-451115722dc5> /System/Library/PrivateFrameworks/IDSFoundation.framework/Versions/A/IDSFoundation
       0x19effa000 -        0x19f07dfff com.apple.CoreVideo (1.8) <d8605842-8c6c-36d7-820d-2132d91e0c06> /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
       0x19c052000 -        0x19c0be29f com.apple.HIServices (1.22) <26b748ae-0046-3cea-a818-1fb4bea67832> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=1.8G resident=0K(0%) swapped_out_or_unallocated=1.8G(100%)
Writable regions: Total=5.5G written=2611K(0%) resident=1731K(0%) swapped_out=880K(0%) unallocated=5.5G(100%)

                                VIRTUAL   REGION
REGION TYPE                        SIZE    COUNT (non-coalesced)
===========                     =======  =======
Accelerate framework               256K        2
Activity Tracing                   256K        1
AttributeGraph Data               1024K        1
CG image                          17.8M       41
CG raster data                     896K       21
ColorSync                           16K        1
CoreAnimation                     6016K      206
CoreGraphics                        48K        3
CoreImage                         33.5M       24
CoreServices                       624K        2
CoreUI image data                 3456K       31
Foundation                          16K        1
Image IO                         412.6M       68
Kernel Alloc Once                   32K        1
MALLOC                           819.3M      206
MALLOC guard page                 3424K        4
SQLite page cache                  512K        4
STACK GUARD                       56.4M       24
STACK GUARD (graphics)              16K        1
Stack                             20.7M       25
VM_ALLOCATE                      130.8M       17
VM_ALLOCATE (reserved)             3.9G        1         reserved VM address space (unallocated)
WebKit Malloc                    224.1M        7
WebKit Malloc (reserved)          32.0M        1         reserved VM address space (unallocated)
__AUTH                            5863K      659
__AUTH_CONST                      89.0M     1049
__CTF                               824        1
__DATA                            34.7M     1050
__DATA_CONST                      34.6M     1101
__DATA_DIRTY                      8845K      906
__FONT_DATA                        2352        1
__GLSLBUILTINS                    5174K        1
__INFO_FILTER                         8        1
__LINKEDIT                       607.0M       49
__OBJC_RO                         78.3M        1
__OBJC_RW (graphics)              2567K        1
__TEXT                             1.2G     1090
__TEXT (graphics)                 38.6M       33
__TPRO_CONST                       128K        2
dyld private memory                128K        1
mapped file                        1.0G      126
page table in kernel              1731K        1
shared memory                      896K       16
===========                     =======  =======
TOTAL                              8.7G     6782
TOTAL, minus reserved VM space     4.8G     6782


-----------
Full Report
-----------

{"app_name":"Sketch","timestamp":"2025-12-11 14:55:46.00 +0800","app_version":"2025.1.4","slice_uuid":"6a731ada-af4d-3cfc-a230-5a5b39e54eb9","build_version":"203504","platform":1,"bundleID":"com.bohemiancoding.sketch3","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 26.1 (25B78)","roots_installed":0,"name":"Sketch","incident_id":"EA6D13C2-DA99-45BB-8802-4A97A862263F"}
{
  "uptime" : 18000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "Mac16,10",
  "coalitionID" : 4008,
  "osVersion" : {
    "train" : "macOS 26.1",
    "build" : "25B78",
    "releaseType" : "User"
  },
  "captureTime" : "2025-12-11 14:55:45.9574 +0800",
  "codeSigningMonitor" : 2,
  "incident" : "EA6D13C2-DA99-45BB-8802-4A97A862263F",
  "pid" : 23401,
  "translated" : false,
  "cpuType" : "ARM-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2025-12-11 14:55:37.3505 +0800",
  "procStartAbsTime" : 449629709884,
  "procExitAbsTime" : 449836083338,
  "procName" : "Sketch",
  "procPath" : "\/Applications\/Sketch.app\/Contents\/MacOS\/Sketch",
  "bundleInfo" : {"CFBundleShortVersionString":"2025.1.4","CFBundleVersion":"203504","CFBundleIdentifier":"com.bohemiancoding.sketch3"},
  "storeInfo" : {"deviceIdentifierForVendor":"23A16CF7-1238-5329-9B4C-1FECCBDA1D50","thirdParty":true},
  "parentProc" : "launchd",
  "parentPid" : 1,
  "coalitionName" : "com.bohemiancoding.sketch3",
  "crashReporterKey" : "D1D53AAB-697E-EA39-5718-76F5271137CC",
  "appleIntelligenceStatus" : {"reasons":["regionIneligible","countryBillingIneligible","countryLocationIneligible"],"state":"unavailable"},
  "developerMode" : 1,
  "codeSigningID" : "com.bohemiancoding.sketch3",
  "codeSigningTeamID" : "",
  "codeSigningFlags" : 570425857,
  "codeSigningValidationCategory" : 10,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "instructionByteStream" : {"beforePC":"fyMD1f17v6n9AwCRFOD\/l78DAJH9e8Go\/w9f1sADX9YQKYDSARAA1A==","atPC":"AwEAVH8jA9X9e7+p\/QMAkQng\/5e\/AwCR\/XvBqP8PX9bAA1\/WcAqA0g=="},
  "bootSessionUUID" : "C427B18D-898F-4BAC-B26F-34762F3D68D9",
  "wakeTime" : 907,
  "sleepWakeUUID" : "98579BCF-EACA-4C6B-974B-09772A683933",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000000, 0x0000000000000000","rawCodes":[0,0],"type":"EXC_CRASH","signal":"SIGABRT"},
  "asi" : {"libsystem_c.dylib":["abort() called"]},
  "exceptionReason" : {"arguments":["__NSFrozenDictionaryM","userContentController:didReceiveScriptMessage:","0x7b1d16040"],"format_string":"-[%s %s]: unrecognized selector sent to instance %p","name":"NSInvalidArgumentException","type":"objc-exception","composed_message":"-[__NSFrozenDictionaryM userContentController:didReceiveScriptMessage:]: unrecognized selector sent to instance 0x7b1d16040","class":"NSException"},
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "lastExceptionBacktrace" : [{"imageOffset":706768,"symbol":"__exceptionPreprocess","symbolLocation":164,"imageIndex":53},{"imageOffset":107544,"symbol":"objc_exception_throw","symbolLocation":88,"imageIndex":52},{"imageOffset":1625556,"symbol":"+[NSObject(NSObject) instanceMethodSignatureForSelector:]","symbolLocation":0,"imageIndex":53},{"imageOffset":302840,"symbol":"___forwarding___","symbolLocation":1480,"imageIndex":53},{"imageOffset":301168,"symbol":"_CF_forwarding_prep_0","symbolLocation":96,"imageIndex":53},{"imageOffset":5618844,"symbol":"ScriptMessageHandlerDelegate::didPostMessage(WebKit::WebPageProxy&, WebKit::FrameInfoData&&, API::ContentWorld&, WebKit::JavaScriptEvaluationResult&&)","symbolLocation":328,"imageIndex":54},{"imageOffset":12345964,"symbol":"WebKit::WebUserContentControllerProxy::didPostMessage(WTF::ObjectIdentifierGeneric<WebKit::WebPageProxyIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::FrameInfoData&&, WTF::ObjectIdentifierGeneric<WebKit::ScriptMessageHandlerIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::JavaScriptEvaluationResult&&, WTF::CompletionHandler<void (std::experimental::fundamentals_v3::expected<WebKit::JavaScriptEvaluationResult, WTF::String>&&)>&&)","symbolLocation":736,"imageIndex":54},{"imageOffset":5630232,"symbol":"WebKit::WebUserContentControllerProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":1088,"imageIndex":54},{"imageOffset":17944024,"symbol":"IPC::MessageReceiverMap::dispatchMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":264,"imageIndex":54},{"imageOffset":11516080,"symbol":"WebKit::WebProcessProxy::dispatchMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":40,"imageIndex":54},{"imageOffset":5400084,"symbol":"WebKit::WebProcessProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":1620,"imageIndex":54},{"imageOffset":17786076,"symbol":"IPC::Connection::dispatchMessage(WTF::UniqueRef<IPC::Decoder>)","symbolLocation":300,"imageIndex":54},{"imageOffset":17787404,"symbol":"IPC::Connection::dispatchIncomingMessages()","symbolLocation":536,"imageIndex":54},{"imageOffset":2068952,"symbol":"WTF::RunLoop::performWork()","symbolLocation":552,"imageIndex":55},{"imageOffset":2075600,"symbol":"WTF::RunLoop::performWork(void*)","symbolLocation":36,"imageIndex":55},{"imageOffset":391656,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__","symbolLocation":28,"imageIndex":53},{"imageOffset":391548,"symbol":"__CFRunLoopDoSource0","symbolLocation":172,"imageIndex":53},{"imageOffset":390888,"symbol":"__CFRunLoopDoSources0","symbolLocation":232,"imageIndex":53},{"imageOffset":385912,"symbol":"__CFRunLoopRun","symbolLocation":820,"imageIndex":53},{"imageOffset":1147740,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":532,"imageIndex":53},{"imageOffset":792424,"symbol":"RunCurrentEventLoopInMode","symbolLocation":316,"imageIndex":56},{"imageOffset":805520,"symbol":"ReceiveNextEventCommon","symbolLocation":488,"imageIndex":56},{"imageOffset":2417416,"symbol":"_BlockUntilNextEventMatchingListInMode","symbolLocation":48,"imageIndex":56},{"imageOffset":5399488,"symbol":"_DPSBlockUntilNextEventMatchingListInMode","symbolLocation":236,"imageIndex":57},{"imageOffset":130612,"symbol":"_DPSNextEvent","symbolLocation":588,"imageIndex":57},{"imageOffset":11460420,"symbol":"-[NSApplication(NSEventRouting) _nextEventMatchingEventMask:untilDate:inMode:dequeue:]","symbolLocation":688,"imageIndex":57},{"imageOffset":11459664,"symbol":"-[NSApplication(NSEventRouting) nextEventMatchingMask:untilDate:inMode:dequeue:]","symbolLocation":72,"imageIndex":57},{"imageOffset":100224,"symbol":"-[NSApplication run]","symbolLocation":368,"imageIndex":57},{"imageOffset":18140,"symbol":"NSApplicationMain","symbolLocation":880,"imageIndex":57},{"imageOffset":36180,"symbol":"start","symbolLocation":7184,"imageIndex":58}],
  "faultingThread" : 0,
  "threads" : [{"triggered":true,"id":357380,"threadState":{"x":[{"value":0},{"value":0},{"value":0},{"value":0},{"value":6788112391},{"value":6095470208},{"value":110},{"value":18446726482597246976},{"value":7273429463429284564},{"value":7273429454857937492},{"value":2},{"value":1099511627776},{"value":4294967293},{"value":0},{"value":0},{"value":0},{"value":328},{"value":8633668576},{"value":0},{"value":6},{"value":259},{"value":8610619744,"symbolLocation":224,"symbol":"_main_thread"},{"value":8575959040,"symbolLocation":0,"symbol":"OBJC_IVAR_$_Object.isa"},{"value":1},{"value":1},{"value":104},{"value":6095475600},{"value":8610588336,"symbolLocation":0,"symbol":"objc_debug_tag60_permutations"},{"value":12851}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788405384},"cpsr":{"value":1073741824},"fp":{"value":6095470064},"sp":{"value":6095470032},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788167088,"matchesCrashFrame":1},"far":{"value":0}},"queue":"com.apple.main-thread","frames":[{"imageOffset":38320,"symbol":"__pthread_kill","symbolLocation":8,"imageIndex":48},{"imageOffset":26760,"symbol":"pthread_kill","symbolLocation":296,"imageIndex":49},{"imageOffset":497744,"symbol":"abort","symbolLocation":124,"imageIndex":50},{"imageOffset":75864,"symbol":"__abort_message","symbolLocation":132,"imageIndex":51},{"imageOffset":5332,"symbol":"demangling_terminate_handler()","symbolLocation":304,"imageIndex":51},{"imageOffset":148500,"symbol":"_objc_terminate()","symbolLocation":156,"imageIndex":52},{"imageOffset":160228,"symbol":"CPPExceptionTerminate()","symbolLocation":504,"imageIndex":7},{"imageOffset":72748,"symbol":"std::__terminate(void (*)())","symbolLocation":16,"imageIndex":51},{"imageOffset":86932,"symbol":"__cxxabiv1::failed_throw(__cxxabiv1::__cxa_exception*)","symbolLocation":88,"imageIndex":51},{"imageOffset":86844,"symbol":"__cxa_throw","symbolLocation":92,"imageIndex":51},{"imageOffset":107904,"symbol":"objc_exception_throw","symbolLocation":448,"imageIndex":52},{"imageOffset":1625556,"symbol":"-[NSObject(NSObject) doesNotRecognizeSelector:]","symbolLocation":364,"imageIndex":53},{"imageOffset":302840,"symbol":"___forwarding___","symbolLocation":1480,"imageIndex":53},{"imageOffset":301168,"symbol":"_CF_forwarding_prep_0","symbolLocation":96,"imageIndex":53},{"imageOffset":5618844,"symbol":"ScriptMessageHandlerDelegate::didPostMessage(WebKit::WebPageProxy&, WebKit::FrameInfoData&&, API::ContentWorld&, WebKit::JavaScriptEvaluationResult&&)","symbolLocation":328,"imageIndex":54},{"imageOffset":12345964,"symbol":"WebKit::WebUserContentControllerProxy::didPostMessage(WTF::ObjectIdentifierGeneric<WebKit::WebPageProxyIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::FrameInfoData&&, WTF::ObjectIdentifierGeneric<WebKit::ScriptMessageHandlerIdentifierType, WTF::ObjectIdentifierMainThreadAccessTraits<unsigned long long>, unsigned long long>, WebKit::JavaScriptEvaluationResult&&, WTF::CompletionHandler<void (std::experimental::fundamentals_v3::expected<WebKit::JavaScriptEvaluationResult, WTF::String>&&)>&&)","symbolLocation":736,"imageIndex":54},{"imageOffset":5630232,"symbol":"WebKit::WebUserContentControllerProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":1088,"imageIndex":54},{"imageOffset":17944024,"symbol":"IPC::MessageReceiverMap::dispatchMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":264,"imageIndex":54},{"imageOffset":11516080,"symbol":"WebKit::WebProcessProxy::dispatchMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":40,"imageIndex":54},{"imageOffset":5400084,"symbol":"WebKit::WebProcessProxy::didReceiveMessage(IPC::Connection&, IPC::Decoder&)","symbolLocation":1620,"imageIndex":54},{"imageOffset":17786076,"symbol":"IPC::Connection::dispatchMessage(WTF::UniqueRef<IPC::Decoder>)","symbolLocation":300,"imageIndex":54},{"imageOffset":17787404,"symbol":"IPC::Connection::dispatchIncomingMessages()","symbolLocation":536,"imageIndex":54},{"imageOffset":2068952,"symbol":"WTF::RunLoop::performWork()","symbolLocation":552,"imageIndex":55},{"imageOffset":2075600,"symbol":"WTF::RunLoop::performWork(void*)","symbolLocation":36,"imageIndex":55},{"imageOffset":391656,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__","symbolLocation":28,"imageIndex":53},{"imageOffset":391548,"symbol":"__CFRunLoopDoSource0","symbolLocation":172,"imageIndex":53},{"imageOffset":390888,"symbol":"__CFRunLoopDoSources0","symbolLocation":232,"imageIndex":53},{"imageOffset":385912,"symbol":"__CFRunLoopRun","symbolLocation":820,"imageIndex":53},{"imageOffset":1147740,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":532,"imageIndex":53},{"imageOffset":792424,"symbol":"RunCurrentEventLoopInMode","symbolLocation":316,"imageIndex":56},{"imageOffset":805520,"symbol":"ReceiveNextEventCommon","symbolLocation":488,"imageIndex":56},{"imageOffset":2417416,"symbol":"_BlockUntilNextEventMatchingListInMode","symbolLocation":48,"imageIndex":56},{"imageOffset":5399488,"symbol":"_DPSBlockUntilNextEventMatchingListInMode","symbolLocation":236,"imageIndex":57},{"imageOffset":130612,"symbol":"_DPSNextEvent","symbolLocation":588,"imageIndex":57},{"imageOffset":11460420,"symbol":"-[NSApplication(NSEventRouting) _nextEventMatchingEventMask:untilDate:inMode:dequeue:]","symbolLocation":688,"imageIndex":57},{"imageOffset":11459664,"symbol":"-[NSApplication(NSEventRouting) nextEventMatchingMask:untilDate:inMode:dequeue:]","symbolLocation":72,"imageIndex":57},{"imageOffset":100224,"symbol":"-[NSApplication run]","symbolLocation":368,"imageIndex":57},{"imageOffset":18140,"symbol":"NSApplicationMain","symbolLocation":880,"imageIndex":57},{"imageOffset":36180,"symbol":"start","symbolLocation":7184,"imageIndex":58}]},{"id":357482,"frames":[],"threadState":{"x":[{"value":6096039936},{"value":3083},{"value":6095503360},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6096039936},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357523,"name":"com.apple.NSEventThread","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":107765024423936},{"value":0},{"value":107765024423936},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":25091},{"value":0},{"value":18446744073709551569},{"value":8633670384},{"value":0},{"value":4294967295},{"value":2},{"value":107765024423936},{"value":0},{"value":107765024423936},{"value":6098903176},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":0},"fp":{"value":6098903024},"sp":{"value":6098902944},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":39308,"symbol":"mach_msg_overwrite","symbolLocation":484,"imageIndex":48},{"imageOffset":4020,"symbol":"mach_msg","symbolLocation":24,"imageIndex":48},{"imageOffset":392080,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":160,"imageIndex":53},{"imageOffset":386280,"symbol":"__CFRunLoopRun","symbolLocation":1188,"imageIndex":53},{"imageOffset":1147740,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":532,"imageIndex":53},{"imageOffset":720052,"symbol":"_NSEventThread","symbolLocation":184,"imageIndex":57},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357584,"name":"KSCrash Exception Handler (Secondary)","threadState":{"x":[{"value":0},{"value":8589934595,"symbolLocation":107551,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":103079220499},{"value":189128884923139},{"value":15483357102080},{"value":189128884879360},{"value":44},{"value":0},{"value":6788341760,"symbolLocation":416,"symbol":"mach_voucher_extract_all_attr_recipes"},{"value":8610667304,"symbolLocation":0,"symbol":"_current_pid"},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":18446744073709551569},{"value":8633677152},{"value":0},{"value":0},{"value":44},{"value":189128884879360},{"value":15483357102080},{"value":189128884923139},{"value":6101199248},{"value":103079220499},{"value":8589934595,"symbolLocation":107551,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":18446744073709550527},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":2147483648},"fp":{"value":6101199232},"sp":{"value":6101199152},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":198644,"symbol":"thread_suspend","symbolLocation":108,"imageIndex":48},{"imageOffset":183492,"symbol":"ksmachexc_i_handleExceptions","symbolLocation":104,"imageIndex":7},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357585,"name":"KSCrash Exception Handler (Primary)","threadState":{"x":[{"value":268451845},{"value":17179869186},{"value":0},{"value":0},{"value":0},{"value":186929861623808},{"value":580},{"value":0},{"value":0},{"value":17179869184},{"value":580},{"value":0},{"value":0},{"value":0},{"value":43523},{"value":0},{"value":18446744073709551569},{"value":8633677152},{"value":0},{"value":0},{"value":580},{"value":186929861623808},{"value":0},{"value":0},{"value":6101773636},{"value":0},{"value":17179869186},{"value":18446744073709550527},{"value":2}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":0},"fp":{"value":6101772432},"sp":{"value":6101772352},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":39308,"symbol":"mach_msg_overwrite","symbolLocation":484,"imageIndex":48},{"imageOffset":4020,"symbol":"mach_msg","symbolLocation":24,"imageIndex":48},{"imageOffset":183528,"symbol":"ksmachexc_i_handleExceptions","symbolLocation":140,"imageIndex":7},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357586,"name":"com.bugsnag.app-hang-detector","threadState":{"x":[{"value":14},{"value":4294964431256813569},{"value":999999333},{"value":68719460488},{"value":14680198217728},{"value":277089815101440},{"value":48},{"value":0},{"value":999999333},{"value":3},{"value":33119604544},{"value":3},{"value":1},{"value":33153955904},{"value":8610634728,"symbolLocation":0,"symbol":"OBJC_CLASS_$_OS_dispatch_semaphore"},{"value":8610634728,"symbolLocation":0,"symbol":"OBJC_CLASS_$_OS_dispatch_semaphore"},{"value":18446744073709551578},{"value":8633672840},{"value":0},{"value":449881914693},{"value":32990100784},{"value":1000000000},{"value":0},{"value":4385247232},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6786800772},"cpsr":{"value":2147483648},"fp":{"value":6102346992},"sp":{"value":6102346960},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131784},"far":{"value":0}},"frames":[{"imageOffset":3016,"symbol":"semaphore_timedwait_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":224388,"symbol":"_dispatch_sema4_timedwait","symbolLocation":64,"imageIndex":60},{"imageOffset":16136,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":76,"imageIndex":60},{"imageOffset":202552,"symbol":"-[BSGAppHangDetector detectAppHangs]","symbolLocation":232,"imageIndex":7},{"imageOffset":157600,"symbol":"__NSThread__start__","symbolLocation":732,"imageIndex":61},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357592,"name":"JavaScriptCore libpas scavenger","threadState":{"x":[{"value":260},{"value":0},{"value":4096},{"value":0},{"value":0},{"value":160},{"value":0},{"value":100000072},{"value":6102920872},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":8633668504},{"value":0},{"value":4829653184},{"value":4829653248},{"value":6102921440},{"value":100000072},{"value":0},{"value":4096},{"value":8193},{"value":8448},{"value":8583782400,"symbolLocation":2744,"symbol":"WTF::RefLogSingleton::s_buffer"},{"value":8613285888,"symbolLocation":1816,"symbol":"bmalloc_common_primitive_heap_support"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788407516},"cpsr":{"value":1610612736},"fp":{"value":6102920992},"sp":{"value":6102920848},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788146424},"far":{"value":0}},"frames":[{"imageOffset":17656,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":48},{"imageOffset":28892,"symbol":"_pthread_cond_wait","symbolLocation":984,"imageIndex":49},{"imageOffset":26205816,"symbol":"scavenger_thread_main","symbolLocation":1440,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357605,"name":"Heap Helper Thread","threadState":{"x":[{"value":260},{"value":0},{"value":7936},{"value":0},{"value":0},{"value":160},{"value":10},{"value":76},{"value":6103493864},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":8633668504},{"value":0},{"value":4985045232},{"value":4985045296},{"value":6103494880},{"value":76},{"value":10},{"value":7936},{"value":7937},{"value":8192},{"value":4985061776},{"value":4985045216}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788407516},"cpsr":{"value":1610612736},"fp":{"value":6103493984},"sp":{"value":6103493840},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788146424},"far":{"value":0}},"frames":[{"imageOffset":17656,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":48},{"imageOffset":28892,"symbol":"_pthread_cond_wait","symbolLocation":984,"imageIndex":49},{"imageOffset":2358120,"symbol":"WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime)","symbolLocation":240,"imageIndex":55},{"imageOffset":2029792,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":4156,"imageIndex":55},{"imageOffset":1705332,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":472,"imageIndex":55},{"imageOffset":2346588,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":260,"imageIndex":55},{"imageOffset":29840,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":16,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357606,"name":"Heap Helper Thread","threadState":{"x":[{"value":260},{"value":0},{"value":7936},{"value":0},{"value":0},{"value":160},{"value":9},{"value":999998745},{"value":6104067304},{"value":0},{"value":256},{"value":1099511628034},{"value":1099511628034},{"value":256},{"value":0},{"value":1099511628032},{"value":305},{"value":8633668504},{"value":0},{"value":4984897776},{"value":4984897840},{"value":6104068320},{"value":999998745},{"value":9},{"value":7936},{"value":7937},{"value":8192},{"value":4984931344},{"value":4984897760}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788407516},"cpsr":{"value":1610612736},"fp":{"value":6104067424},"sp":{"value":6104067280},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788146424},"far":{"value":0}},"frames":[{"imageOffset":17656,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":48},{"imageOffset":28892,"symbol":"_pthread_cond_wait","symbolLocation":984,"imageIndex":49},{"imageOffset":2358120,"symbol":"WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime)","symbolLocation":240,"imageIndex":55},{"imageOffset":2029792,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":4156,"imageIndex":55},{"imageOffset":1705332,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":472,"imageIndex":55},{"imageOffset":2346588,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":260,"imageIndex":55},{"imageOffset":29840,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":16,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357607,"name":"Heap Helper Thread","threadState":{"x":[{"value":260},{"value":0},{"value":8448},{"value":0},{"value":0},{"value":160},{"value":9},{"value":999999798},{"value":6104640744},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":8633668504},{"value":0},{"value":4984963312},{"value":4984963376},{"value":6104641760},{"value":999999798},{"value":9},{"value":8448},{"value":8449},{"value":8704},{"value":4985061648},{"value":4984963296}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788407516},"cpsr":{"value":1610612736},"fp":{"value":6104640864},"sp":{"value":6104640720},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788146424},"far":{"value":0}},"frames":[{"imageOffset":17656,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":48},{"imageOffset":28892,"symbol":"_pthread_cond_wait","symbolLocation":984,"imageIndex":49},{"imageOffset":2358120,"symbol":"WTF::ThreadCondition::timedWait(WTF::Mutex&, WTF::WallTime)","symbolLocation":240,"imageIndex":55},{"imageOffset":2029792,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":4156,"imageIndex":55},{"imageOffset":1705332,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":472,"imageIndex":55},{"imageOffset":2346588,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":260,"imageIndex":55},{"imageOffset":29840,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":16,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357644,"frames":[],"threadState":{"x":[{"value":6106361856},{"value":85507},{"value":6105825280},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6106361856},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357645,"frames":[],"threadState":{"x":[{"value":6106935296},{"value":85251},{"value":6106398720},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6106935296},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357646,"frames":[],"threadState":{"x":[{"value":6107508736},{"value":84995},{"value":6106972160},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6107508736},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357703,"frames":[],"threadState":{"x":[{"value":6108082176},{"value":77583},{"value":6107545600},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6108082176},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357704,"frames":[],"threadState":{"x":[{"value":6108655616},{"value":78351},{"value":6108119040},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6108655616},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357706,"frames":[],"threadState":{"x":[{"value":6109802496},{"value":130307},{"value":6109265920},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6109802496},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357710,"name":"com.apple.NSURLConnectionLoader","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":308992832176128},{"value":0},{"value":308992832176128},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":71943},{"value":0},{"value":18446744073709551569},{"value":8633670384},{"value":0},{"value":4294967295},{"value":2},{"value":308992832176128},{"value":0},{"value":308992832176128},{"value":6110944584},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":0},"fp":{"value":6110944432},"sp":{"value":6110944352},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":39308,"symbol":"mach_msg_overwrite","symbolLocation":484,"imageIndex":48},{"imageOffset":4020,"symbol":"mach_msg","symbolLocation":24,"imageIndex":48},{"imageOffset":392080,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":160,"imageIndex":53},{"imageOffset":386280,"symbol":"__CFRunLoopRun","symbolLocation":1188,"imageIndex":53},{"imageOffset":1147740,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":532,"imageIndex":53},{"imageOffset":2404344,"symbol":"+[__CFN_CoreSchedulingSetRunnable _run:]","symbolLocation":416,"imageIndex":62},{"imageOffset":157600,"symbol":"__NSThread__start__","symbolLocation":732,"imageIndex":61},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357780,"name":"com.apple.CFSocket.private","threadState":{"x":[{"value":4},{"value":0},{"value":17286349440},{"value":0},{"value":0},{"value":0},{"value":1342177280},{"value":0},{"value":6112096480},{"value":0},{"value":32794430056},{"value":15},{"value":9},{"value":32950599552},{"value":72057602648679809,"symbolLocation":72057594037927937,"symbol":"OBJC_CLASS_$___NSCFArray"},{"value":8610751872,"symbolLocation":0,"symbol":"OBJC_CLASS_$___NSCFArray"},{"value":93},{"value":8633672760},{"value":0},{"value":32963840208},{"value":8576122880,"symbolLocation":896,"symbol":"__last_exception_os_log_pack__"},{"value":8576124392,"symbolLocation":0,"symbol":"__CFActiveSocketsLock"},{"value":17286349440},{"value":33080240640},{"value":64},{"value":0},{"value":17286349488},{"value":32973983200},{"value":32973983152}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6789153364},"cpsr":{"value":1610612736},"fp":{"value":6112096192},"sp":{"value":6112062416},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788177492},"far":{"value":0}},"frames":[{"imageOffset":48724,"symbol":"__select","symbolLocation":8,"imageIndex":48},{"imageOffset":488020,"symbol":"__CFSocketManager","symbolLocation":708,"imageIndex":53},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":357793,"frames":[],"threadState":{"x":[{"value":6178729984},{"value":71707},{"value":6178193408},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6178729984},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":357798,"threadState":{"x":[{"value":1},{"value":8},{"value":6247670831},{"value":14},{"value":8},{"value":6247670751},{"value":5},{"value":5},{"value":9033373888},{"value":9034266576},{"value":9034231184},{"value":6247671072},{"value":14},{"value":7158061628,"symbolLocation":0,"symbol":"-[GEOPDExternalTransitLookupParameters _readExternalTransitStationCodes]"},{"value":7140973420},{"value":7158061628,"symbolLocation":0,"symbol":"-[GEOPDExternalTransitLookupParameters _readExternalTransitStationCodes]"},{"value":6784939004,"symbolLocation":0,"symbol":"invocation function for block in mach_o::Header::forEachSection(void (mach_o::Header::SectionInfo const&, bool&) block_pointer) const"},{"value":7701436844027929736},{"value":0},{"value":6247671696},{"value":6247671416},{"value":7481196544},{"value":7158271448,"symbolLocation":44,"symbol":"-[GEOPDPlaceSuggestionResult isEqual:]"},{"value":2267866512},{"value":2073149440},{"value":8923578368},{"value":425383150},{"value":9032545024},{"value":1535}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6784780600},"cpsr":{"value":1610612736},"fp":{"value":6247671312},"sp":{"value":6247671024},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6784780756},"far":{"value":0}},"queue":"com.bugsnag.event-uploader (QOS: UNSPECIFIED)","frames":[{"imageOffset":375252,"symbol":"dyld3::MachOLoaded::findClosestSymbol(unsigned long long, char const**, unsigned long long*) const","symbolLocation":424,"imageIndex":58},{"imageOffset":253732,"symbol":"dyld4::APIs::dladdr(void const*, dl_info*)","symbolLocation":236,"imageIndex":58},{"imageOffset":66712,"symbol":"-[BugsnagStackframe symbolicateIfNeeded]","symbolLocation":84,"imageIndex":7},{"imageOffset":146164,"symbol":"-[BugsnagEvent symbolicateIfNeeded]","symbolLocation":544,"imageIndex":7},{"imageOffset":153564,"symbol":"-[BSGEventUploadObjectOperation loadEventAndReturnError:]","symbolLocation":36,"imageIndex":7},{"imageOffset":195724,"symbol":"-[BSGEventUploadOperation runWithDelegate:completionHandler:]","symbolLocation":96,"imageIndex":7},{"imageOffset":198048,"symbol":"-[BSGEventUploadOperation start]","symbolLocation":260,"imageIndex":7},{"imageOffset":118912,"symbol":"__NSOPERATIONQUEUE_IS_STARTING_AN_OPERATION__","symbolLocation":16,"imageIndex":61},{"imageOffset":118640,"symbol":"__NSOQSchedule_f","symbolLocation":164,"imageIndex":61},{"imageOffset":70864,"symbol":"_dispatch_block_async_invoke2","symbolLocation":148,"imageIndex":60},{"imageOffset":113348,"symbol":"_dispatch_client_callout","symbolLocation":16,"imageIndex":60},{"imageOffset":26340,"symbol":"_dispatch_continuation_pop","symbolLocation":596,"imageIndex":60},{"imageOffset":23896,"symbol":"_dispatch_async_redirect_invoke","symbolLocation":580,"imageIndex":60},{"imageOffset":81864,"symbol":"_dispatch_root_queue_drain","symbolLocation":364,"imageIndex":60},{"imageOffset":83844,"symbol":"_dispatch_worker_thread2","symbolLocation":180,"imageIndex":60},{"imageOffset":11792,"symbol":"_pthread_wqthread","symbolLocation":232,"imageIndex":49},{"imageOffset":7068,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":49}]},{"id":357799,"frames":[],"threadState":{"x":[{"value":6248247296},{"value":114691},{"value":6247710720},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":0},"fp":{"value":0},"sp":{"value":6248247296},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788385684},"far":{"value":0}}},{"id":358039,"name":"WebCore: Scrolling","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":603679128289280},{"value":0},{"value":603679128289280},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":140555},{"value":0},{"value":18446744073709551569},{"value":8633670384},{"value":0},{"value":4294967295},{"value":2},{"value":603679128289280},{"value":0},{"value":603679128289280},{"value":6096609224},{"value":8589934592,"symbolLocation":107548,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":0},"fp":{"value":6096609072},"sp":{"value":6096608992},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":39308,"symbol":"mach_msg_overwrite","symbolLocation":484,"imageIndex":48},{"imageOffset":4020,"symbol":"mach_msg","symbolLocation":24,"imageIndex":48},{"imageOffset":392080,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":160,"imageIndex":53},{"imageOffset":386280,"symbol":"__CFRunLoopRun","symbolLocation":1188,"imageIndex":53},{"imageOffset":1147740,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":532,"imageIndex":53},{"imageOffset":727600,"symbol":"CFRunLoopRun","symbolLocation":64,"imageIndex":53},{"imageOffset":2072984,"symbol":"WTF::Detail::CallableWrapper<WTF::RunLoop::create(WTF::ASCIILiteral, WTF::ThreadType, WTF::Thread::QOS)::$_0, void>::call()","symbolLocation":244,"imageIndex":55},{"imageOffset":2346588,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":260,"imageIndex":55},{"imageOffset":29840,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":16,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":358094,"name":"CVDisplayLink","threadState":{"x":[{"value":260},{"value":0},{"value":0},{"value":0},{"value":0},{"value":65704},{"value":0},{"value":19173042},{"value":22017},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":8633668504},{"value":0},{"value":32943219768},{"value":32943219832},{"value":1},{"value":19173042},{"value":0},{"value":0},{"value":22017},{"value":22272},{"value":449836444949},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788407560},"cpsr":{"value":2684354560},"fp":{"value":6099479984},"sp":{"value":6099479840},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788146424},"far":{"value":0}},"frames":[{"imageOffset":17656,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":48},{"imageOffset":28936,"symbol":"_pthread_cond_wait","symbolLocation":1028,"imageIndex":49},{"imageOffset":15164,"symbol":"CVDisplayLink::waitUntil(unsigned long long)","symbolLocation":336,"imageIndex":65},{"imageOffset":11300,"symbol":"CVDisplayLink::runIOThread()","symbolLocation":500,"imageIndex":65},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":358110,"name":"Log work queue","threadState":{"x":[{"value":14},{"value":4985880760},{"value":0},{"value":6109223216},{"value":8575970208,"symbolLocation":0,"symbol":"_os_log_current_test_callback"},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":4290},{"value":8610629680,"symbolLocation":0,"symbol":"OBJC_CLASS_$_OS_os_log"},{"value":8610629680,"symbolLocation":0,"symbol":"OBJC_CLASS_$_OS_os_log"},{"value":18446744073709551580},{"value":8633672856},{"value":0},{"value":4984126208},{"value":4984126248},{"value":6109229056},{"value":0},{"value":0},{"value":4984126336},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":7499163316},"cpsr":{"value":2147483648},"fp":{"value":6109228880},"sp":{"value":6109228864},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131760},"far":{"value":0}},"frames":[{"imageOffset":2992,"symbol":"semaphore_wait_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":17966772,"symbol":"IPC::StreamConnectionWorkQueue::startProcessingThread()::$_0::operator()()","symbolLocation":44,"imageIndex":54},{"imageOffset":2346588,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":260,"imageIndex":55},{"imageOffset":29840,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":16,"imageIndex":55},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]},{"id":358175,"name":"HIE: M_ e305e8a6642a28f8 2025-12-11 14:55:45.949","threadState":{"x":[{"value":0},{"value":8589934595,"symbolLocation":107551,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":103079220499},{"value":288376989235739},{"value":15483357102080},{"value":288376989155328},{"value":44},{"value":0},{"value":6788341760,"symbolLocation":416,"symbol":"mach_voucher_extract_all_attr_recipes"},{"value":1},{"value":33226711136},{"value":7},{"value":33056569888},{"value":33056569952},{"value":8610626312,"symbolLocation":0,"symbol":"_NSConcreteMallocBlock"},{"value":8610626312,"symbolLocation":0,"symbol":"_NSConcreteMallocBlock"},{"value":18446744073709551569},{"value":8633673560},{"value":0},{"value":0},{"value":44},{"value":288376989155328},{"value":15483357102080},{"value":288376989235739},{"value":6097186064},{"value":103079220499},{"value":8589934595,"symbolLocation":107551,"symbol":"apple::vision::libraries::facecore::mod::keypoints::secondEyePosPcaModes"},{"value":18446744073709550527},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6788206632},"cpsr":{"value":2147483648},"fp":{"value":6097186048},"sp":{"value":6097185968},"esr":{"value":1442840704,"description":"(Syscall)"},"pc":{"value":6788131892},"far":{"value":0}},"frames":[{"imageOffset":3124,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":48},{"imageOffset":77864,"symbol":"mach_msg2_internal","symbolLocation":76,"imageIndex":48},{"imageOffset":198644,"symbol":"thread_suspend","symbolLocation":108,"imageIndex":48},{"imageOffset":222344,"symbol":"SOME_OTHER_THREAD_SWALLOWED_AT_LEAST_ONE_EXCEPTION","symbolLocation":20,"imageIndex":66},{"imageOffset":157600,"symbol":"__NSThread__start__","symbolLocation":732,"imageIndex":61},{"imageOffset":27656,"symbol":"_pthread_start","symbolLocation":136,"imageIndex":49},{"imageOffset":7080,"symbol":"thread_start","symbolLocation":8,"imageIndex":49}]}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4371398656,
    "CFBundleShortVersionString" : "2025.1.4",
    "CFBundleIdentifier" : "com.bohemiancoding.sketch3",
    "size" : 9928704,
    "uuid" : "6a731ada-af4d-3cfc-a230-5a5b39e54eb9",
    "path" : "\/Applications\/Sketch.app\/Contents\/MacOS\/Sketch",
    "name" : "Sketch",
    "CFBundleVersion" : "203504"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4384505856,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SecureReceiptKit",
    "size" : 81920,
    "uuid" : "8e159d1f-1641-3e85-b99b-4070710e942d",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SecureReceiptKit.framework\/Versions\/A\/SecureReceiptKit",
    "name" : "SecureReceiptKit",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4386095104,
    "CFBundleIdentifier" : "com.bohemiancoding.WebP",
    "size" : 507904,
    "uuid" : "1a3379f9-eb79-308e-a7b2-489a25ed647f",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/WebP.framework\/Versions\/A\/WebP",
    "name" : "WebP"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4384702464,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.zxcvbn.Zxcvbn",
    "size" : 49152,
    "uuid" : "d12e1ee3-d402-3a8b-99f1-531eefd29419",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Zxcvbn.framework\/Versions\/A\/Zxcvbn",
    "name" : "Zxcvbn",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4384129024,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchPluginManager",
    "size" : 114688,
    "uuid" : "fdfd0560-c3e6-3141-bd97-9e16e5b9513f",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchPluginManager.framework\/Versions\/A\/SketchPluginManager",
    "name" : "SketchPluginManager",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4384374784,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "flex.Flex",
    "size" : 16384,
    "uuid" : "95f808e6-0fb2-3597-a49b-e6f0f14e6929",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Flex_5CCDA29C3_PackageProduct.framework\/Versions\/A\/Flex_5CCDA29C3_PackageProduct",
    "name" : "Flex_5CCDA29C3_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4401971200,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchPrototyping",
    "size" : 4505600,
    "uuid" : "595814e0-d5b6-3186-8aee-611c176780d6",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchPrototyping.framework\/Versions\/A\/SketchPrototyping",
    "name" : "SketchPrototyping",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4384833536,
    "CFBundleShortVersionString" : "6.12.0",
    "CFBundleIdentifier" : "com.bugsnag.Bugsnag",
    "size" : 344064,
    "uuid" : "4774ab16-330c-3bb7-8fe8-6b28c223cead",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Bugsnag.framework\/Versions\/A\/Bugsnag",
    "name" : "Bugsnag",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4408328192,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchQL",
    "size" : 2916352,
    "uuid" : "551776fe-941c-352f-bf04-bcaa02cb24fa",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchQL.framework\/Versions\/A\/SketchQL",
    "name" : "SketchQL",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4392239104,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.BCFoundation",
    "size" : 1228800,
    "uuid" : "4e5a33b3-d4b0-33d5-86fe-c6b1e622f7f6",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/BCFoundation.framework\/Versions\/A\/BCFoundation",
    "name" : "BCFoundation",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4388601856,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.Chocolat",
    "size" : 376832,
    "uuid" : "3e19f26d-574e-35af-ba7e-13dc593f8296",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Chocolat.framework\/Versions\/A\/Chocolat",
    "name" : "Chocolat",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4386717696,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-collections.Collections",
    "size" : 901120,
    "uuid" : "98a4cde9-2763-3308-8a6f-cc3eb5018624",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Collections_47BB0D94F2814A8A_PackageProduct.framework\/Versions\/A\/Collections_47BB0D94F2814A8A_PackageProduct",
    "name" : "Collections_47BB0D94F2814A8A_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4385505280,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchAnnotations",
    "size" : 278528,
    "uuid" : "4ce25c48-8880-3278-93b1-318e9abb56f8",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchAnnotations.framework\/Versions\/A\/SketchAnnotations",
    "name" : "SketchAnnotations",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4387913728,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.Clipper",
    "size" : 114688,
    "uuid" : "4751cacb-e49c-375b-bf43-0e0fe8211286",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Clipper.framework\/Versions\/A\/Clipper",
    "name" : "Clipper",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4390436864,
    "CFBundleIdentifier" : "com.cocoascript.CocoaScript",
    "size" : 262144,
    "uuid" : "2149df52-4d4b-3995-a424-78f752826aa8",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/CocoaScript.framework\/Versions\/A\/CocoaScript",
    "name" : "CocoaScript",
    "CFBundleVersion" : "1.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4385947648,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "me.rsms.peertalk.Peertalk",
    "size" : 49152,
    "uuid" : "c7aa6f4d-a927-35ba-89e3-3c98a39af6e6",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/PeertalkMac.framework\/Versions\/A\/PeertalkMac",
    "name" : "PeertalkMac",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4397301760,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.cloud",
    "size" : 1032192,
    "uuid" : "9beef690-8f44-313a-bedb-cd39fa871c0d",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchCloudKit.framework\/Versions\/A\/SketchCloudKit",
    "name" : "SketchCloudKit",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4391010304,
    "CFBundleShortVersionString" : "3.4.0",
    "CFBundleIdentifier" : "com.kulakov.ShortcutRecorder",
    "size" : 212992,
    "uuid" : "c3bb3edc-f5d4-3ea7-88b3-3e14d436d66f",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/ShortcutRecorder.framework\/Versions\/A\/ShortcutRecorder",
    "name" : "ShortcutRecorder",
    "CFBundleVersion" : "3.4.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4389617664,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchFeatureFlags",
    "size" : 65536,
    "uuid" : "cc55bf87-1965-30af-a0f1-2db7aa10871f",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchFeatureFlags.framework\/Versions\/A\/SketchFeatureFlags",
    "name" : "SketchFeatureFlags",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4389765120,
    "CFBundleShortVersionString" : "2.6.4",
    "CFBundleIdentifier" : "org.sparkle-project.Sparkle",
    "size" : 278528,
    "uuid" : "0e273e3e-459c-3fa6-9a86-4754c5cc30ff",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Sparkle.framework\/Versions\/B\/Sparkle",
    "name" : "Sparkle",
    "CFBundleVersion" : "2039.1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4394041344,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SharedEditing",
    "size" : 1294336,
    "uuid" : "56e644af-6a06-366e-af1f-671546ea86ef",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SharedEditing.framework\/Versions\/A\/SharedEditing",
    "name" : "SharedEditing",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4395859968,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-algorithms.Algorithms",
    "size" : 557056,
    "uuid" : "80a4bc02-aef8-34c5-aee9-ea6c5fc75169",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/Algorithms_-79BF82D738C97CDC_PackageProduct.framework\/Versions\/A\/Algorithms_-79BF82D738C97CDC_PackageProduct",
    "name" : "Algorithms_-79BF82D738C97CDC_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4423630848,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchControllers",
    "size" : 3309568,
    "uuid" : "663d5114-bdff-3f7a-aabf-3dc27a5c6360",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchControllers.framework\/Versions\/A\/SketchControllers",
    "name" : "SketchControllers",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4396662784,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "co.awkward.SketchMirrorServerKit",
    "size" : 147456,
    "uuid" : "f427ae6b-a379-39c6-86cb-a64d11613e5a",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchMirrorServerKit.framework\/Versions\/A\/SketchMirrorServerKit",
    "name" : "SketchMirrorServerKit",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4413538304,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchModel",
    "size" : 5226496,
    "uuid" : "7f59ebe7-95a0-3a07-b030-466db52b88a4",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchModel.framework\/Versions\/A\/SketchModel",
    "name" : "SketchModel",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4389339136,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchPDF",
    "size" : 114688,
    "uuid" : "2573a2c9-ebf7-3fbf-a52a-c56bfe0cfb60",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchPDF.framework\/Versions\/A\/SketchPDF",
    "name" : "SketchPDF",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4398956544,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchRendering",
    "size" : 1851392,
    "uuid" : "423ebb54-96fa-38b8-b92a-2311d6e21fa0",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchRendering.framework\/Versions\/A\/SketchRendering",
    "name" : "SketchRendering",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4390191104,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "combine-schedulers.CombineSchedulers",
    "size" : 98304,
    "uuid" : "6058bf1c-5d6f-31ab-867a-d7ee31e80055",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/CombineSchedulers_-54F188414C11E20_PackageProduct.framework\/Versions\/A\/CombineSchedulers_-54F188414C11E20_PackageProduct",
    "name" : "CombineSchedulers_-54F188414C11E20_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4391665664,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchMirrorTalk",
    "size" : 32768,
    "uuid" : "8d9c22b1-5997-3c47-987a-56e39accff70",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchMirrorTalk.framework\/Versions\/A\/SketchMirrorTalk",
    "name" : "SketchMirrorTalk",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4422434816,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.SketchSVG",
    "size" : 327680,
    "uuid" : "86ea44d0-e055-3c32-afc7-4362562982dd",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/SketchSVG.framework\/Versions\/A\/SketchSVG",
    "name" : "SketchSVG",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4391780352,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.bohemiancoding.BCLayerList",
    "size" : 212992,
    "uuid" : "66713812-93cc-3ecd-b601-de3dadcdc281",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/BCLayerList.framework\/Versions\/A\/BCLayerList",
    "name" : "BCLayerList",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4391452672,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-collections.InternalCollectionsUtilities",
    "size" : 32768,
    "uuid" : "cad2e302-afc9-3643-95aa-282349dc75f9",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/InternalCollectionsUtilities.framework\/Versions\/A\/InternalCollectionsUtilities",
    "name" : "InternalCollectionsUtilities",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4396990464,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-collections.OrderedCollections",
    "size" : 163840,
    "uuid" : "2d8fd73c-9d54-3ead-bf5f-bddf48f0335d",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/OrderedCollections.framework\/Versions\/A\/OrderedCollections",
    "name" : "OrderedCollections",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4421550080,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-collections.DequeModule",
    "size" : 81920,
    "uuid" : "295b6821-a0ec-3ab2-bba8-beafc5a0064c",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/DequeModule.framework\/Versions\/A\/DequeModule",
    "name" : "DequeModule",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4421419008,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-numerics.RealModule",
    "size" : 32768,
    "uuid" : "51ade87d-faf8-3c7f-b384-ae667aad631d",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/RealModule_20918C39686D2FF4_PackageProduct.framework\/Versions\/A\/RealModule_20918C39686D2FF4_PackageProduct",
    "name" : "RealModule_20918C39686D2FF4_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4421189632,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "yoga.yoga",
    "size" : 65536,
    "uuid" : "ff11c04f-e6ed-382b-bcc9-80434f90ad01",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/yoga_93A40DCF4_PackageProduct.framework\/Versions\/A\/yoga_93A40DCF4_PackageProduct",
    "name" : "yoga_93A40DCF4_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4422057984,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "xctest-dynamic-overlay.XCTestDynamicOverlay",
    "size" : 81920,
    "uuid" : "6002fb2b-3590-315f-bf3c-58f6d902095b",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/XCTestDynamicOverlay_6187313334988FF6_PackageProduct.framework\/Versions\/A\/XCTestDynamicOverlay_6187313334988FF6_PackageProduct",
    "name" : "XCTestDynamicOverlay_6187313334988FF6_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4422221824,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "swift-concurrency-extras.ConcurrencyExtras",
    "size" : 49152,
    "uuid" : "b9b89728-3cb9-3c16-a0db-bf894db54c9b",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/ConcurrencyExtras_-2B4B167800F2E3ED_PackageProduct.framework\/Versions\/A\/ConcurrencyExtras_-2B4B167800F2E3ED_PackageProduct",
    "name" : "ConcurrencyExtras_-2B4B167800F2E3ED_PackageProduct",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4421730304,
    "size" : 196608,
    "uuid" : "7e7a9b09-3265-3331-aab1-3a32cba90a2f",
    "path" : "\/Applications\/Sketch.app\/Contents\/Resources\/libConfigurer64.dylib",
    "name" : "libConfigurer64.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4423057408,
    "CFBundleShortVersionString" : "3.3.4",
    "CFBundleIdentifier" : "net.pol-online.GCDWebServers",
    "size" : 147456,
    "uuid" : "e47472ba-60b7-3b86-8d12-35a5939600e5",
    "path" : "\/Applications\/Sketch.app\/Contents\/Frameworks\/GCDWebServers.framework\/Versions\/A\/GCDWebServers",
    "name" : "GCDWebServers",
    "CFBundleVersion" : "3.3.4"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 4575068160,
    "CFBundleShortVersionString" : "341.11",
    "CFBundleIdentifier" : "com.apple.AGXMetalG16G-B0",
    "size" : 8552448,
    "uuid" : "a22549f3-d4f5-3b88-af18-e06837f0d352",
    "path" : "\/System\/Library\/Extensions\/AGXMetalG16G_B0.bundle\/Contents\/MacOS\/AGXMetalG16G_B0",
    "name" : "AGXMetalG16G_B0",
    "CFBundleVersion" : "341.11"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 4431970304,
    "size" : 49152,
    "uuid" : "f8bd9069-8c4f-37ea-af9a-2b1060f54e4f",
    "path" : "\/usr\/lib\/libobjc-trampolines.dylib",
    "name" : "libobjc-trampolines.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 5098209280,
    "size" : 16384,
    "uuid" : "7e3337de-4b13-3b6b-9c99-7722e2b761cd",
    "path" : "\/System\/Library\/Frameworks\/Foundation.framework\/Versions\/C\/Resources\/BridgeSupport\/Foundation.dylib",
    "name" : "Foundation.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 5098291200,
    "size" : 16384,
    "uuid" : "a6af9e40-e163-3998-9c50-95f1c261a3ec",
    "path" : "\/System\/Library\/Frameworks\/CoreFoundation.framework\/Versions\/A\/Resources\/BridgeSupport\/CoreFoundation.dylib",
    "name" : "CoreFoundation.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 5098373120,
    "size" : 16384,
    "uuid" : "22c223ca-d6e1-388e-8e3d-001842b09286",
    "path" : "\/System\/Library\/Frameworks\/CoreGraphics.framework\/Versions\/A\/Resources\/BridgeSupport\/CoreGraphics.dylib",
    "name" : "CoreGraphics.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 5098438656,
    "size" : 16384,
    "uuid" : "b15dac66-7a3d-30f0-8dd7-fd02854d1bb0",
    "path" : "\/System\/Library\/Frameworks\/AppKit.framework\/Versions\/C\/Resources\/BridgeSupport\/AppKit.dylib",
    "name" : "AppKit.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 5103484928,
    "CFBundleShortVersionString" : "4.1.0",
    "CFBundleIdentifier" : "com.lanhuSketch.smallStone1",
    "size" : 1064960,
    "uuid" : "d7f3a778-d55f-3415-b696-b562e67a6504",
    "path" : "\/Users\/USER\/Library\/Application Support\/com.bohemiancoding.sketch3\/*\/Lanhu.framework\/Lanhu",
    "name" : "Lanhu",
    "CFBundleVersion" : "90"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 5401247744,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.AppleMetalOpenGLRenderer",
    "size" : 409600,
    "uuid" : "7fba6cd5-06ae-37aa-aa67-580c920ea69d",
    "path" : "\/System\/Library\/Extensions\/AppleMetalOpenGLRenderer.bundle\/Contents\/MacOS\/AppleMetalOpenGLRenderer",
    "name" : "AppleMetalOpenGLRenderer",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6788128768,
    "size" : 246944,
    "uuid" : "9fe7c84d-0c2b-363f-bee5-6fd76d67a227",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6788378624,
    "size" : 51900,
    "uuid" : "e95973b8-824c-361e-adf4-390747c40897",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6786879488,
    "size" : 532552,
    "uuid" : "9f5bd98b-9367-3594-933b-16f392c2a5f8",
    "path" : "\/usr\/lib\/system\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6788018176,
    "size" : 108848,
    "uuid" : "94052f7c-7016-32ff-9fef-eefae55a2adb",
    "path" : "\/usr\/lib\/libc++abi.dylib",
    "name" : "libc++abi.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6783860736,
    "size" : 341132,
    "uuid" : "5a0aab4e-0c1a-3680-82c9-43dc4007a6e7",
    "path" : "\/usr\/lib\/libobjc.A.dylib",
    "name" : "libobjc.A.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6788665344,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 5532352,
    "uuid" : "3c4a3add-9e48-33da-82ee-80520e6cbe3b",
    "path" : "\/System\/Library\/Frameworks\/CoreFoundation.framework\/Versions\/A\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "4109.1.401"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 7481196544,
    "CFBundleShortVersionString" : "21622",
    "CFBundleIdentifier" : "com.apple.WebKit",
    "size" : 22128832,
    "uuid" : "3b55482a-efe2-35a7-b1c9-3f41a823a30b",
    "path" : "\/System\/Library\/Frameworks\/WebKit.framework\/Versions\/A\/WebKit",
    "name" : "WebKit",
    "CFBundleVersion" : "21622.2.11.11.9"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 7346003968,
    "CFBundleShortVersionString" : "21622",
    "CFBundleIdentifier" : "com.apple.JavaScriptCore",
    "size" : 28438144,
    "uuid" : "c79071c9-db50-3264-a316-94abd0d3b9a9",
    "path" : "\/System\/Library\/Frameworks\/JavaScriptCore.framework\/Versions\/A\/JavaScriptCore",
    "name" : "JavaScriptCore",
    "CFBundleVersion" : "21622.2.11.11.9"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 7000846336,
    "CFBundleShortVersionString" : "2.1.1",
    "CFBundleIdentifier" : "com.apple.HIToolbox",
    "size" : 3155968,
    "uuid" : "9ab64c08-0685-3a0d-9a7e-83e7a1e9ebb4",
    "path" : "\/System\/Library\/Frameworks\/Carbon.framework\/Versions\/A\/Frameworks\/HIToolbox.framework\/Versions\/A\/HIToolbox",
    "name" : "HIToolbox"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6860267520,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.AppKit",
    "size" : 24300448,
    "uuid" : "3c0949bb-e361-369a-80b7-17440eb09e98",
    "path" : "\/System\/Library\/Frameworks\/AppKit.framework\/Versions\/C\/AppKit",
    "name" : "AppKit",
    "CFBundleVersion" : "2685.20.119"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6784405504,
    "size" : 651108,
    "uuid" : "b50f5a1a-be81-3068-92e1-3554f2be478a",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6786576384,
    "size" : 290464,
    "uuid" : "8fb392ae-401f-399a-96ae-41531cf91162",
    "path" : "\/usr\/lib\/system\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6814134272,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 16396896,
    "uuid" : "00467f1f-216a-36fe-8587-c820c7e0437d",
    "path" : "\/System\/Library\/Frameworks\/Foundation.framework\/Versions\/C\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "4109.1.401"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6892437504,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.CFNetwork",
    "size" : 3908096,
    "uuid" : "4e62d7e8-e33e-3586-866a-5b6657b8e190",
    "path" : "\/System\/Library\/Frameworks\/CFNetwork.framework\/Versions\/A\/CFNetwork",
    "name" : "CFNetwork",
    "CFBundleVersion" : "3860.200.71"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 7152656384,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.GeoServices",
    "size" : 31264128,
    "uuid" : "061f8bbf-ba3b-30a3-a0a6-f0884c8a765c",
    "path" : "\/System\/Library\/PrivateFrameworks\/GeoServices.framework\/Versions\/A\/GeoServices",
    "name" : "GeoServices",
    "CFBundleVersion" : "2027.21.8.4.16"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 7140212736,
    "CFBundleShortVersionString" : "10.0",
    "CFBundleIdentifier" : "com.apple.idsfoundation",
    "size" : 4651328,
    "uuid" : "304ed5e5-b77d-30f4-b754-451115722dc5",
    "path" : "\/System\/Library\/PrivateFrameworks\/IDSFoundation.framework\/Versions\/A\/IDSFoundation",
    "name" : "IDSFoundation",
    "CFBundleVersion" : "1000"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6962520064,
    "CFBundleShortVersionString" : "1.8",
    "CFBundleIdentifier" : "com.apple.CoreVideo",
    "size" : 540672,
    "uuid" : "d8605842-8c6c-36d7-820d-2132d91e0c06",
    "path" : "\/System\/Library\/Frameworks\/CoreVideo.framework\/Versions\/A\/CoreVideo",
    "name" : "CoreVideo",
    "CFBundleVersion" : "726.2"
  },
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 6912548864,
    "CFBundleShortVersionString" : "1.22",
    "CFBundleIdentifier" : "com.apple.HIServices",
    "size" : 443040,
    "uuid" : "26b748ae-0046-3cea-a818-1fb4bea67832",
    "path" : "\/System\/Library\/Frameworks\/ApplicationServices.framework\/Versions\/A\/Frameworks\/HIServices.framework\/Versions\/A\/HIServices",
    "name" : "HIServices"
  }
],
  "sharedCache" : {
  "base" : 6783320064,
  "size" : 5609635840,
  "uuid" : "b69ff43c-dbfd-3fb1-b4fe-a8fe32ea1062"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.8G resident=0K(0%) swapped_out_or_unallocated=1.8G(100%)\nWritable regions: Total=5.5G written=2611K(0%) resident=1731K(0%) swapped_out=880K(0%) unallocated=5.5G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nAccelerate framework               256K        2 \nActivity Tracing                   256K        1 \nAttributeGraph Data               1024K        1 \nCG image                          17.8M       41 \nCG raster data                     896K       21 \nColorSync                           16K        1 \nCoreAnimation                     6016K      206 \nCoreGraphics                        48K        3 \nCoreImage                         33.5M       24 \nCoreServices                       624K        2 \nCoreUI image data                 3456K       31 \nFoundation                          16K        1 \nImage IO                         412.6M       68 \nKernel Alloc Once                   32K        1 \nMALLOC                           819.3M      206 \nMALLOC guard page                 3424K        4 \nSQLite page cache                  512K        4 \nSTACK GUARD                       56.4M       24 \nSTACK GUARD (graphics)              16K        1 \nStack                             20.7M       25 \nVM_ALLOCATE                      130.8M       17 \nVM_ALLOCATE (reserved)             3.9G        1         reserved VM address space (unallocated)\nWebKit Malloc                    224.1M        7 \nWebKit Malloc (reserved)          32.0M        1         reserved VM address space (unallocated)\n__AUTH                            5863K      659 \n__AUTH_CONST                      89.0M     1049 \n__CTF                               824        1 \n__DATA                            34.7M     1050 \n__DATA_CONST                      34.6M     1101 \n__DATA_DIRTY                      8845K      906 \n__FONT_DATA                        2352        1 \n__GLSLBUILTINS                    5174K        1 \n__INFO_FILTER                         8        1 \n__LINKEDIT                       607.0M       49 \n__OBJC_RO                         78.3M        1 \n__OBJC_RW (graphics)              2567K        1 \n__TEXT                             1.2G     1090 \n__TEXT (graphics)                 38.6M       33 \n__TPRO_CONST                       128K        2 \ndyld private memory                128K        1 \nmapped file                        1.0G      126 \npage table in kernel              1731K        1 \nshared memory                      896K       16 \n===========                     =======  ======= \nTOTAL                              8.7G     6782 \nTOTAL, minus reserved VM space     4.8G     6782 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "cac6b4fcd8723c0a77167ead1d0a5a0fbb4c9d6c",
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "6425c75e4327780c10cc4252",
      "factorPackIds" : [
        "642600a457e7664b1698eb32"
      ],
      "deploymentId" : 240000004
    },
    {
      "rolloutId" : "65a8173205d942272410674b",
      "factorPackIds" : [
        "65d39fa4cb0e2417d11ce5f6"
      ],
      "deploymentId" : 240000001
    }
  ],
  "experiments" : [

  ]
}
}

Model: Mac16,10, BootROM 13822.41.1, proc 10:4:6 processors, 16 GB, SMC
Graphics: Apple M4, Apple M4, Built-In
Display: Redmi 27 NU, 5120 x 2880 (5K/UHD+ - Ultra High Definition Plus), Main, MirrorOff, Online
Memory Module: LPDDR5, Micron
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x4388), wl0: Oct  3 2025 01:10:09 version 23.41.7.0.41.51.200 FWID 01-b32af15a
IO80211_driverkit-1530.16 "IO80211_driverkit-1530.16" Oct 10 2025 22:56:35
AirPort:
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en1
Network Service: Ethernet, Ethernet, en0
Network Service: AX88x72A, Ethernet, en9
Thunderbolt Bus: Mac mini, Apple Inc.
Thunderbolt Bus: Mac mini, Apple Inc.
Thunderbolt Bus: Mac mini, Apple Inc.
