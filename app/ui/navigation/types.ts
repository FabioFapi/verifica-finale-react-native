export enum Screen {
  Home = "Home",
  Detail = "Detail",
  TabNavigator = "TabNavigator",
  Favorites = "Favorites",
}

export type TabParams = {
  [Screen.Home]: undefined;
  [Screen.Detail]: undefined;
  [Screen.Favorites]: undefined;
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
  };
  [Screen.Favorites]: undefined;
};