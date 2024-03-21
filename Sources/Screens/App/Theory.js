import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOTopTabs } from '../../Components';
import { DummyData } from '../../Utils';
import { RenderTabContent } from '../../Components';
import { useInset } from '../../Hooks';

const Theory = () => {
  const flatlistRef = useRef();
  const inset = useInset();
  const [State, setState] = useState({ selectedTab: DummyData.Theory.Tabs[0] });

  useEffect(() => {
    const timeout = setTimeout(() => {
      flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });
    }, 10);

    return () => {
      clearTimeout(timeout);
    };
  }, [State.selectedTab]);

  return (
    <RNContainer>
      <RNHeader title={Strings.Theory} noScroll={true}>
        <LOTopTabs
          tabs={DummyData.Theory.Tabs}
          onTabChange={tab => setState(p => ({ ...p, selectedTab: tab }))}
        />
        <FlatList
          ref={flatlistRef}
          data={DummyData.Theory.TabContent[State.selectedTab]}
          keyExtractor={(v, i) => String(i)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: inset.bottom }}
          renderItem={({ item }) => <RenderTabContent item={item} />}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Theory;
