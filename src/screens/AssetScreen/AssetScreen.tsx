import {useRoute} from '@react-navigation/native';
import AssetTemplate from '../../components/templates/AssetTemplate';
import {mocData} from '../../moc-data';

const AssetScreen = () => {
  const params = useRoute().params;
  // @ts-ignore
  const id = params?.id ?? 0;
  const data = mocData.find(i => i.id === id) ?? mocData[0];

  return (
    <AssetTemplate
      Image={data.Image}
      cardTitle={data.data.title}
      cardSubTitle={data.data.subTitle}
      list={data.data.list}
    />
  );
};

export default AssetScreen;
