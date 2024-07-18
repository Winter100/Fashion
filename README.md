# 이 옷 어때?

![메인](https://github.com/Winter100/Fashion/assets/119467710/9b134406-2f35-4560-b0bf-e8237b8a0cde)

- 배포 : [이 옷 어때?](https://fashion-mocha.vercel.app/)

- 깃허브 : https://github.com/Winter100/Fashion
- Test ID : test@test.com
- Test PW : test1234

<hr>

## 설치 및 환경 변수 설정

1. 저장소를 클론합니다.

```bash
git clone https://github.com/Winter100/Fashion.git
```

2. 필요한 패키지를 설치합니다.

```bash
yarn
```

3. 프로젝트를 빌드합니다.

```bash
yarn build
```

4. 프로젝트를 실행합니다.

```bash
yarn start
```

5. 환경변수 설정

- 로컬에서 실행하기 위해서는 Supabase의 Key가 필요합니다.
- 최상위 디렉토리에 .env.local을 생성후 키를 입력합니다.

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_KEY = 본인의 Supbase Key가 필요합니다.
```

실행이 되지 않는다면 배포된 주소를 이용해 주세요. [이 옷 어때?](https://fashion-mocha.vercel.app/)

<hr>

## 프로젝트 소개

개인 프로젝트이며, 오늘 하루 입었던 패션을 기록하고 다른 사람에게 자랑하는 웹사이트 입니다.

1. 프로젝트 이름: <b>이 옷 어때?</b>
2. 프로젝트 기간: <b>2024/05/01 ~ 2024/06/11</b>
3. 기술스택

![next.js](<https://img.shields.io/badge/Next.js(app)-000?logo=nextdotjs&logoColor=fff&style=for-the-badge>)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![React-hook-form](https://img.shields.io/badge/React_hook_form-007ACC?style=for-the-badge&logo=react-hook-form&logoColor=white)
![tanstack-query](https://img.shields.io/badge/tanstack_query-005?logo=tanstack_query&logoColor=fff&style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

<hr>

## 구조

<details>
<summary>프로젝트 구조</summary>

```
fashion
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ 404.png
│  └─ meta-image.png
├─ README.md
├─ src
│  └─ app
│     ├─ (route)
│     │  ├─ (main)
│     │  │  ├─ (non-ProtectedRoute)
│     │  │  │  ├─ detail
│     │  │  │  │  └─ [tag]
│     │  │  │  │     └─ [id]
│     │  │  │  │        └─ page.tsx
│     │  │  │  ├─ fashion
│     │  │  │  │  └─ [tag]
│     │  │  │  │     ├─ loading.tsx
│     │  │  │  │     └─ page.tsx
│     │  │  │  └─ search
│     │  │  │     ├─ loading.tsx
│     │  │  │     └─ page.tsx
│     │  │  ├─ (ProtectedRoute)
│     │  │  │  ├─ (Auth)
│     │  │  │  │  ├─ edit
│     │  │  │  │  │  └─ [tag]
│     │  │  │  │  │     └─ [id]
│     │  │  │  │  │        └─ page.tsx
│     │  │  │  │  ├─ layout.tsx
│     │  │  │  │  ├─ mypage
│     │  │  │  │  │  ├─ list
│     │  │  │  │  │  │  └─ page.tsx
│     │  │  │  │  │  └─ page.tsx
│     │  │  │  │  └─ write
│     │  │  │  │     └─ page.tsx
│     │  │  │  └─ (NoAuth)
│     │  │  │     ├─ auth
│     │  │  │     │  ├─ signin
│     │  │  │     │  │  └─ page.tsx
│     │  │  │     │  └─ signup
│     │  │  │     │     └─ page.tsx
│     │  │  │     └─ layout.tsx
│     │  │  ├─ layout.tsx
│     │  │  ├─ not-found.tsx
│     │  │  └─ [...not-found]
│     │  │     └─ page.tsx
│     │  └─ page.tsx
│     ├─ globals.css
│     ├─ icon.ico
│     ├─ layout.tsx
│     ├─ _components
│     │  ├─ Auth
│     │  │  ├─ SignIn.tsx
│     │  │  └─ SignUp.tsx
│     │  ├─ Comments
│     │  │  ├─ CommentEntry.tsx
│     │  │  ├─ CommentList.tsx
│     │  │  ├─ CommentView.tsx
│     │  │  └─ CommentWrite.tsx
│     │  ├─ Common
│     │  │  ├─ AlertWrapper.tsx
│     │  │  ├─ AuthMenu.tsx
│     │  │  ├─ BackButton.tsx
│     │  │  ├─ Comment
│     │  │  │  ├─ Comment.tsx
│     │  │  │  ├─ CommentContent.tsx
│     │  │  │  ├─ CommentHeader.tsx
│     │  │  │  └─ CommentTitle.tsx
│     │  │  ├─ DarkModeToggleBtn.tsx
│     │  │  ├─ FashionImage.tsx
│     │  │  ├─ FashionSkleton.tsx
│     │  │  ├─ InputField.tsx
│     │  │  ├─ Item
│     │  │  │  ├─ Item.tsx
│     │  │  │  ├─ ItemBody.tsx
│     │  │  │  ├─ ItemImage.tsx
│     │  │  │  └─ ItemSubTitle.tsx
│     │  │  ├─ LoadingSpinner.tsx
│     │  │  ├─ MainCalendar.tsx
│     │  │  ├─ Manage
│     │  │  │  ├─ Manage.tsx
│     │  │  │  ├─ ManageContent.tsx
│     │  │  │  ├─ ManageContentArea.tsx
│     │  │  │  ├─ ManageContentWrapper.tsx
│     │  │  │  ├─ ManageDescription.tsx
│     │  │  │  ├─ ManageLabel.tsx
│     │  │  │  └─ ManageTitle.tsx
│     │  │  ├─ MenuItem.tsx
│     │  │  ├─ Pagination.tsx
│     │  │  ├─ Search.tsx
│     │  │  └─ Title.tsx
│     │  ├─ Fashion
│     │  │  ├─ Detail
│     │  │  │  ├─ ContentSection.tsx
│     │  │  │  ├─ Detail.tsx
│     │  │  │  ├─ DetailItem.tsx
│     │  │  │  └─ LabelContent.tsx
│     │  │  ├─ Edit
│     │  │  │  ├─ ContentTextarea.tsx
│     │  │  │  ├─ Edit.tsx
│     │  │  │  ├─ ImageUpload.tsx
│     │  │  │  ├─ SubmitButtons.tsx
│     │  │  │  ├─ TagSelect.tsx
│     │  │  │  └─ TitleInput.tsx
│     │  │  ├─ FashionList
│     │  │  │  ├─ Fashion
│     │  │  │  │  ├─ FashionItem.tsx
│     │  │  │  │  └─ FashionList.tsx
│     │  │  │  ├─ ItemEntry.tsx
│     │  │  │  └─ SearchFashion
│     │  │  │     ├─ SearchFashionList.tsx
│     │  │  │     └─ SearchItem.tsx
│     │  │  └─ MyFashion
│     │  │     ├─ MyFashionItem.tsx
│     │  │     ├─ MyFashionList.tsx
│     │  │     └─ MyFashionListTitle.tsx
│     │  ├─ Gnb
│     │  │  └─ TopGnb.tsx
│     │  ├─ HomeContent
│     │  │  └─ HomeContent.tsx
│     │  ├─ Menu
│     │  │  ├─ MobileMenu.tsx
│     │  │  └─ PcMenu.tsx
│     │  ├─ Modal
│     │  │  ├─ DeleteBtn.tsx
│     │  │  └─ ModalCalendar.tsx
│     │  └─ My
│     │     ├─ LoginInfo.tsx
│     │     ├─ RecordInfo.tsx
│     │     └─ UserInfo.tsx
│     ├─ _constant
│     │  └─ constant.ts
│     ├─ _hooks
│     │  ├─ useAuth
│     │  │  ├─ useSignIn.ts
│     │  │  ├─ useSignOut.ts
│     │  │  ├─ useSignUp.ts
│     │  │  └─ useUser.ts
│     │  ├─ useAuth.ts
│     │  ├─ useChangeParams.ts
│     │  ├─ useFashion
│     │  │  ├─ useCreate.ts
│     │  │  ├─ useCreateComment.ts
│     │  │  ├─ useDelete.ts
│     │  │  ├─ useDeleteComment.ts
│     │  │  ├─ useReadComments.ts
│     │  │  ├─ useReadDetail.ts
│     │  │  ├─ useReadFashionEditData.ts
│     │  │  ├─ useReadFashionList.ts
│     │  │  ├─ useReadMyFashionList.ts
│     │  │  ├─ useReadSearch.ts
│     │  │  ├─ useSearch.ts
│     │  │  └─ useUpdate.ts
│     │  ├─ useFashion.ts
│     │  ├─ useLoading.ts
│     │  ├─ useLocalStorageState.ts
│     │  ├─ useMobile.ts
│     │  ├─ usePreview.ts
│     │  ├─ useQueryString.ts
│     │  ├─ useRouteChange.ts
│     │  └─ useWriteForm.ts
│     ├─ _layouts
│     │  ├─ HomeLayout.tsx
│     │  └─ Protected
│     │     ├─ AuthProtectedRoute.tsx
│     │     └─ NoAuthProtectedRoute.tsx
│     ├─ _lib
│     │  ├─ fonts
│     │  │  └─ Dongle-Regular.ttf
│     │  ├─ supabase
│     │  │  ├─ auth
│     │  │  │  ├─ getUser.ts
│     │  │  │  ├─ signIn.ts
│     │  │  │  ├─ signOut.ts
│     │  │  │  └─ signUp.ts
│     │  │  ├─ auth.ts
│     │  │  ├─ fashion
│     │  │  │  ├─ createComment.ts
│     │  │  │  ├─ createFashion.ts
│     │  │  │  ├─ deleteComment.ts
│     │  │  │  ├─ deleteFashion.ts
│     │  │  │  ├─ readComments.ts
│     │  │  │  ├─ readFashion.ts
│     │  │  │  ├─ readFashionEditData.ts
│     │  │  │  ├─ readFashionList.ts
│     │  │  │  ├─ readMyFashionList.ts
│     │  │  │  ├─ readSearchFashion.ts
│     │  │  │  └─ updateFashion.ts
│     │  │  ├─ fashion.ts
│     │  │  └─ supabase.ts
│     │  └─ utils
│     │     ├─ autoSignOut.ts
│     │     ├─ convertToKST.ts
│     │     ├─ convertToTag.ts
│     │     ├─ dateFn.ts
│     │     ├─ generateImageMetadata.ts
│     │     ├─ getQueryClient.ts
│     │     ├─ imgCompression.ts
│     │     ├─ isValid.ts
│     │     ├─ localstorage.ts
│     │     ├─ metadata.ts
│     │     ├─ setFashionRoute.ts
│     │     └─ tagCount.ts
│     ├─ _provider
│     │  ├─ DarkModeProvider.tsx
│     │  ├─ TanstackProvider.tsx
│     │  ├─ ToastProvider.tsx
│     │  └─ UserContextProvider.tsx
│     └─ _types
│        └─ type.ts
├─ tailwind.config.js
├─ tsconfig.json
└─ yarn.lock

```

</details>

## 주요 기능

| 회원가입 검증                                                                                           | - 로그인 검증                                                                                         |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![회원가입](https://github.com/Winter100/Fashion/assets/119467710/f1b404d0-bf9f-4ca3-9674-7fd961fbb96f) | ![로그인](https://github.com/Winter100/Fashion/assets/119467710/7af46cf7-ebcb-4be7-b637-4e5149c82954) |

| 게시글 등록                                                                                               | 댓글 작성 및 삭제                                                                                                |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![게시글작성](https://github.com/Winter100/Fashion/assets/119467710/eb95b0bd-9b9d-4643-8f10-788665912125) | ![댓글 작성 및 삭제](https://github.com/Winter100/Fashion/assets/119467710/6be9b0b8-a45b-4408-9ccb-d8bcb8ecf673) |
|                                                                                                           |                                                                                                                  |

| 게시글 필터                                                                                               | 마이페이지 필터                                                                                                |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![게시글필터](https://github.com/Winter100/Fashion/assets/119467710/b08b3f06-3e8b-4cdf-ab76-35214701cda3) | ![마이페이지 필터](https://github.com/Winter100/Fashion/assets/119467710/ec188062-7725-45f9-91fe-25718fefa079) |
|                                                                                                           |                                                                                                                |

| 게시글 수정                                                                                                | 게시글 삭제                                                                                                | 게시글 검색                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![게시글 수정](https://github.com/Winter100/Fashion/assets/119467710/d35b9f13-d3e8-432f-bb8d-26805ff1104b) | ![게시글 삭제](https://github.com/Winter100/Fashion/assets/119467710/0da9c070-ae7d-48e4-a896-38be22d5e270) | ![검색](https://github.com/Winter100/Fashion/assets/119467710/512186ea-b4c1-4fc8-8056-6ff1f24e2ac4) |
|                                                                                                            |                                                                                                            |                                                                                                     |

| 반응형 디자인                                                                              |
| ------------------------------------------------------------------------------------------ |
| ![반응형](https://github.com/user-attachments/assets/067339c9-e004-4358-9bf1-180a4f3ca1c3) |
| tailwind를 이용하여 반응형 디자인을 구현했습니다.                                          |

## 프로젝트를 진행하며 발생한 문제 및 해결

#### 1. Dot Notation 활용

- 비슷한 UI지만 페이지에 따라 특정 라인이 추가되거나 제거 되어 보여져야 했습니다.
- 해당 이슈를 해결하기 위해 Dot Notation을 활용해 컴포넌트의 재활용성을 올렸습니다.

| Item                                                                                                | fashionItem                                                                                                 | fashionSearch                                                                                                 |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Item](https://github.com/Winter100/Fashion/assets/119467710/93babcb4-8a3f-4adb-a6cc-f7700d0fa477) | ![fashion-Item](https://github.com/Winter100/Fashion/assets/119467710/fd396501-6876-44f2-a265-647c6df42141) | ![fashion-Search](https://github.com/Winter100/Fashion/assets/119467710/e859a860-bd7b-4163-abf3-2e14861b821f) |
|                                                                                                     |

| Manage                                                                                                   | Login Info                                                                                                | Record Info                                                                                                | User Info                                                                                                |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Info 폴더](https://github.com/Winter100/Fashion/assets/119467710/c4a422f7-5cb7-447c-b7a0-eba49bc86bf3) | ![Login info](https://github.com/Winter100/Fashion/assets/119467710/82280934-08fa-4cc4-8097-c13829f13c0a) | ![Record Info](https://github.com/Winter100/Fashion/assets/119467710/f3cb141d-512b-4a5c-9dc0-4f8e5dfa956f) | ![User Info](https://github.com/Winter100/Fashion/assets/119467710/c26e89ce-6b1f-436f-910f-2b481a08047e) |
|                                                                                                          |

#### 2. Catch-all Segments를 404 Not Found Page로 활용하기

- Next.js 에서 app / not-found.tsx를 생성하면 모든 라우트에서 not Found가 발생했을 시 해당 not-found 컴포넌트로 렌더링 할 수 있습니다.
- 이 프로젝트에서 루트 페이지의 레이아웃은 실제 유저가 이용하는 레이아웃을 포함하지 않아 위 방식으로 해결했을시에 모든 UI가 사라지고 404 페이지만 화면에 렌더링되어 UI/UX 적으로 좋지 않았습니다.
- 이를 해결하기 위해 Catch-all Segments를 활용하여 not-Found(404)를 구현했습니다.

| 폴더구조                                                                                                | [...not-found] / page.tsx                                                                                                                               | not-found.tsx                                                                                            | 404 notFound                                                                                              |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![폴더구조](https://github.com/Winter100/Fashion/assets/119467710/f9d8aeda-862d-4391-9e24-1b07c374c969) | ![NotFoundPage](https://github.com/Winter100/Fashion/assets/119467710/c8285055-5bb0-43d0-a2d3-e9c4f47c5f31)                                             | ![not-found](https://github.com/Winter100/Fashion/assets/119467710/2967c663-9655-4ade-88d9-49b781e39e46) | ![404 페이지](https://github.com/Winter100/Fashion/assets/119467710/f55b7ee4-448c-46db-803b-091b3b5f4c3f) |
|                                                                                                         | Catch-all Segments를 활용하여 의도하지 않은 route를 해당 페이지로 렌더링되게 하였으며, notFound()를 실행하여 의미적으로 notFound가 될 수 있게 했습니다. | notFound()를 캐치하여 루트의 layout이 아닌 **_(main)의 layout에서 해당 페이지가 렌더링_** 됩니다.        | 실제 구현된 404페이지 입니다.                                                                             |

<hr>

#### 3. Tailwind로 다크모드 구현하기

- tailwind에서는 **_dark: 적용할 CSS_** 로 다크모드를 쉽게 구현할 수 있었습니다.
- 하지만 다크모드가 필요한 태그마다 적용해 주어야하는 불편함이 있었고, 수정을 하려면 같은 이름으로 된 모든 className을 찾아 수정해주어야 했습니다.
- 다크모드가 필요한 태그를 컴포넌트화 하여 해결하는 방법도 있었으나 tailwind의 동적 클래스 이름과 CSS변수를 활용하여 해결 했습니다.

| globals.css                                                                                                | tailwind.config                                                                                                  | 활용                                                                                                           |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![globals css](https://github.com/Winter100/Fashion/assets/119467710/a82965b9-2156-4a7c-9060-a7ca3f8edf72) | ![tailwind.confg.js](https://github.com/Winter100/Fashion/assets/119467710/6a4d6ce0-4fb1-4e18-b41b-ec357002ebb2) | ![활용한 컴포넌트](https://github.com/Winter100/Fashion/assets/119467710/db692d97-7d61-403f-84c3-ba35505fe48e) |
| light와 dark를 나눠 각각 적용할 색상을 지정했습니다.                                                       | className을 만들고 globals.css에서 적용한 css변수를 가져와 할당했습니다.                                         | 다크모드가 필요한 곳에 적용했고 light와 dark에 따라 색상이 바뀌게 했습니다.                                    |
