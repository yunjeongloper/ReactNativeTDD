# ReactNativeTDD

Using Jest, Enzyme, and Detox for TDD on React Native!

References to

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

## TestCase

- 테스트 케이스를 작성할 때, Component별로 Rendering하는 항목을 Interaction을 하는 항목을 나눈다. 항목이 애매한 경우도 당연히 있을 수 있다.
- Rendering에는 해당 Component가 state에 따라 변경되어야 하는 요소가 포함된다.
- Interaction은 주로 'ㅇ 하면 ㅁ 한다' 같은 형식이다. 예를 들면. '버튼을 누르면 ㅁㅁ인자를 ㅇㅇ함수에 전달한다' 이런식이다.
- E2E테스트는 기능별로 화면과 로직을 한꺼번에 테스트할 수 있는 것 같은데, 아직 정확히 감이 안온다.
- TDD는 기본적으로 Functional한 테스트를 진행한다고 생각하면 된다.

## 앱 디자인 및 컴포넌트 정의

- RDD (describe -> it -> it -> ...)
- wrapper을 만들고 jQuery selector 처럼 컴포넌트를 찾아서 원하는 것이 있는지(?) 테스트한다.
- Jest 문법에 익숙해져야 할 듯..
- expect()
- .find()
- .contains()
- .toBe()
- TestCase를 짜고 -> 실패하는 것을 확인하고 -> 구현한다.
- 실제로 테스트 코드를 작성하는데 'ToDo'를 'Todo'로 입력했다가 에러가 나서 금방 오타를 찾았다. 테스트 코드에 대한 확신만 있다면 사소한 오류라도 쉽게 예측할 수 있을 것 같다.
- .toHaveLength(1) <-> .toBeVisible()? 후자가 훨씬 직관적인데 어느 라이브러리에서 직원해주는것일까?
- ***테스트 코드를 작성한 부분 넘어서 진행을 하면 안된다*** <- 계속 강조하심!!!

## Coding Test Cases

- 테스크 코드에서 it 이 실행되기 전에 테스트할 wrapper을 새로 생성해주면 더 깔끔한 테스트를 진행할 수 있다. beforeEach를 사용해서 wrapper가 초기화되도록 하자

```javascript
describe('AddToDo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddToDo />);
  });

  it('it TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('it Button visible?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
```

- 버튼을 눌렸다고 가정하고 싶을 때는 React Native의 props인 onPress를 활용하면 된다.
- 한 컴포넌트가 props로 받게 될 콜백 함수를 테스트하고싶은데.. 좀 복잡하다 jest.fn()을 쓰는데 이건 더 찾아보고 정리해야 할 듯. 대충 jest에서 이 함수가 몇 번 호출이 되었는지, 어떤 인자와 호출이 되었는지 확인할 수 있게 해줌.
- 테스트 코드에서 콜백 함수를 테스트해보고 싶다면 props 객체를 만들고 그 안에 콜백 함수를 넣어서 props객체를 wrapper 컴포넌트에 전달해줘야 한다. 그래야 테스크 코드에서 해당 함수를 컨트롤할 수 있기 때문이다.
- 강의에서는 Class Component를 사용하는데, 나는 연습도해볼겸 Functional Component + Hooks로 코드를 짜고 있다. 동일한 테스트 코드가 성공하는 코드이지만 훨씬 간결하고 깔끔하다!!
