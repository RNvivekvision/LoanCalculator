import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOTopTabs } from '../../Components';
import { RenderTabContent } from '../../Components';
import { useDummyData, useInset } from '../../Hooks';

const Theory = () => {
  const inset = useInset();
  const { Theory } = useDummyData();
  const [State, setState] = useState({
    selectedTab: Theory.Tabs[0].value,
  });

  const List = useCallback(() => {
    return (
      <FlatList
        data={Theory.TabContent[State.selectedTab]}
        keyExtractor={(v, i) => String(i)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: inset.bottom + 10 }}
        renderItem={({ item, index }) => (
          <RenderTabContent item={item} index={index} />
        )}
      />
    );
  }, [State.selectedTab]);

  return (
    <RNContainer>
      <RNHeader title={Strings.Theory} noScroll={true}>
        <LOTopTabs
          tabs={Theory.Tabs}
          onTabChange={tab => setState(p => ({ ...p, selectedTab: tab.value }))}
        />
        <List />
      </RNHeader>
    </RNContainer>
  );
};

export default Theory;
