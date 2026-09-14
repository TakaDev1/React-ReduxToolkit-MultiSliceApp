# React-ReduxToolkit-CounterHistoryApp

ReactとRedux Toolkitを使用して、カウンターの状態と操作履歴を管理する練習用アプリです。

## 📌 概要

Redux Toolkitの`createSlice`、`configureStore`、`useSelector`、`useDispatch`を使用して、カウンターの状態管理を実装します。

カウンターの状態をRedux Storeで一元管理し、コンポーネントからActionをDispatchすることで状態を更新します。

## 🛠 使用技術

* React
* TypeScript
* Redux Toolkit
* React Redux
* Vite
* Tailwind CSS

## 📂 ディレクトリ構成

```text
src/
├── app/
│   └── store.ts
│
├── features/
│   ├── counter/
│   │   ├── components/
│   │   │   ├── CounterComponent.tsx
│   │   │   └── CounterHistory.tsx
│   │   ├── slices/
│   │   │   └── CounterSlice.ts
│   │   └── types/
│   │       └── CounterType.ts
│   │
│   └── theme/
│       ├── components/
│       │   └── ThemeComponent.tsx
│       ├── slices/
│       │   └── ThemeSlice.ts
│       └── types/
│           └── ThemeType.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🎯 学習内容

### Redux Toolkit

* `configureStore`
* `createSlice`
* `useSelector`
* `useDispatch`
* `RootState`
* Action
* Reducer
* Redux Store

### TypeScript

* 型定義
* `ReturnType`
* Redux Storeの型推論
* `RootState`の定義

### Feature-based構成

機能ごとにコンポーネント、Slice、型をまとめて管理します。

```text
features/
├── counter/
└── theme/
```

各Featureの中に、それぞれの機能で使用するファイルを配置します。

## 🔄 Reduxの状態管理フロー

```text
Component
    │
    │ dispatch(action)
    ↓
Action
    │
    ↓
Reducer
    │
    │ stateを更新
    ↓
Redux Store
    │
    │ stateを取得
    ↓
useSelector
    │
    ↓
Component
```

## 🗃 Redux Store

`configureStore`を使用してRedux Storeを作成します。

```ts
const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
```

StoreではFeatureごとのReducerを登録します。

```text
Store
├── counter
└── theme
```

そのため、`counter`のstateには、

```ts
state.counter
```

としてアクセスできます。

## 🔍 RootState

Redux Store全体のstate型は、`store.getState`から自動的に取得します。

```ts
export type RootState = ReturnType<typeof store.getState>;
```

これによって、`useSelector`でRedux Storeの構造をTypeScriptに認識させることができます。

```ts
const count = useSelector(
  (state: RootState) => state.counter.count
);
```

## 🎮 Counter機能

Counterでは以下の操作を実装します。

* カウントを増加
* カウントを減少
* カウントをリセット
* カウント履歴を管理

```text
+
↓
count + 1

-
↓
count - 1

RESET
↓
countを初期状態へ
```

## 💡 Reduxを使用するメリット

Reduxでは、アプリ全体で共有するstateをStoreに集約できます。

例えば、

```text
Redux Store
│
├── counter
├── theme
└── user
```

のようにFeatureごとのstateを管理できます。

別のFeatureからも同じstateを参照・変更できるため、Featureをまたいだ状態共有がしやすくなります。

また、Action → Reducer → Storeという決まった流れでstateを変更するため、状態変更の処理を追跡しやすくなります。

## 📚 このアプリで理解すること

このアプリを通して、以下のRedux Toolkitの基本的な流れを理解することを目的とします。

```text
createSlice
    ↓
Reducer
    ↓
configureStore
    ↓
Provider
    ↓
useSelector / useDispatch
    ↓
Component
```

Redux Toolkitを使用して、複数のFeatureで共有するstateをどのように管理するのかを学習します。
