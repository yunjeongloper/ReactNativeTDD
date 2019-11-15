# ReactNativeTDD

Using Jest, Enzyme, and Detox for TDD on React Native!

## Jest

- react-dom을 설치해줘야 함
- jest.config.js를 생성하여 package.json 외부에서 jest 환경 설정을 함

## Enzyme

<-> react-test-renderer?

## Detox

- aysnc하게 동작한다는 것이 특징
- 설치는 -> [Detox Installation](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) 최신 버전의 문서를 따라가는 것이 이롭다.
- package.json의 detox congiruations에서 binaryPath와 build 값을 내 프로젝트에 맞게 변경해주어야 한다 ('example'이라는 문자열이 들어가 있는 곳을 내 프로젝트 이름으로 바꿔주어야 함) ***React Native 6.0 버전 이상***부터는 ios 프로젝트에 CocoaPod이 설치되어 있기 때문에, build의 내용도 꼭 바꿔주자.
- 영상에서는 바로 test를 날려도 괜찮았는데, 나는 자꾸 빌드했냐고 물어본다... 그래서 `detox build`를 하긴 했는데 그래도 안된다. 보니까 binaryPath에서 오타가 있었다!!!!!! 아래와 같은 에러가 뜬다면 configuration 오타가 있는지 확인해봐야할 것이다.

```linux
 Error: app binary not found at '/Users/jang-yunjeong/NotCloud/TDDRN/ios/build/Build/TDDRN/Build/Products/Debug-iphonesimulator/TDDRN.app', did you build
it?
    at Device._getAbsolutePath (/Users/jang-yunjeong/NotCloud/TDDRN/node_modules/detox/src/devices/Device.js:286:13)
    at Device.prepare (/Users/jang-yunjeong/NotCloud/TDDRN/node_modules/detox/src/devices/Device.js:18:29)
    at Detox.init (/Users/jang-yunjeong/NotCloud/TDDRN/node_modules/detox/src/Detox.js:72:18)
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

경로를 수정하고 `detox test`를 하니까 위의 에러가 사라지고 테스트 실패 에러가 뜬다.

detox-init 으로 생성된 템플릿 코드이니 현재 우리 프로젝트와는 맞지 않아서 에러가 뜨는것이 당연하다. 어떻게 detox가 활용될지 넘 궁금하다.
