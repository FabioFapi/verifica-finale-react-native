export enum Screen {
  HomeMain = 'HomeMain',
  Home = 'Home',
  Detail = 'Detail',
  Search = 'Search',
}

export type TabParams = {
  [Screen.Home]: undefined;
  [Screen.Detail]: {
    item: string;
  };
};

export type HomeStackParamList = {
  [Screen.HomeMain]: {
    text: string;
  };
  [Screen.Search]: undefined;
};


export type MainParamList = {
  TabNavigator: undefined;
};