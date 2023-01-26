import {SvgProps} from 'react-native-svg';

export interface ListItemType {
  id: number;
  title: string;
  description: string;
}

export interface AssetTemplatePrps {
  Image: React.FC<SvgProps>;
  cardTitle: string;
  cardSubTitle: string;
  list: ListItemType[];
}
