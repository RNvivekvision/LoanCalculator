import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOTopTabs } from '../../Components';
import { DummyData } from '../../Utils';
import { RenderTabContent } from '../../Components';
import { useInset } from '../../Hooks';

const Theory = () => {
  const inset = useInset();
  const [State, setState] = useState({ selectedTab: DummyData.Theory.Tabs[0] });

  const List = useCallback(() => {
    return (
      <FlatList
        data={DummyData.Theory.TabContent[State.selectedTab]}
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
          tabs={DummyData.Theory.Tabs}
          onTabChange={tab => setState(p => ({ ...p, selectedTab: tab }))}
        />
        <List />
      </RNHeader>
    </RNContainer>
  );
};

export default Theory;
