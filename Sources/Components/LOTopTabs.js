import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { RenderTopTabs } from './Renders';

const LOTopTabs = ({ tabs, onTabChange }) => {
  const [State, setState] = useState({ selectedTab: tabs[0] });

  useEffect(() => {
    onTabChange?.(State.selectedTab);
  }, [State.selectedTab]);

  return (
    <View>
      <FlatList
        data={tabs}
        keyExtractor={(v, i) => String(i)}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RenderTopTabs
            item={item}
            selectedTab={State.selectedTab === item}
            onPress={v => setState(p => ({ ...p, selectedTab: v }))}
          />
        )}
      />
    </View>
  );
};

export default LOTopTabs;
