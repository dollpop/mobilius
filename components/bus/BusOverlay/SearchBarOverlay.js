import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { debouncer } from "../../../utils/debouncing";
import Constants from "expo-constants";
import { useGetSearchBusStation } from "../../../hooks/queries/bus/useGetSearchBusStation";
import Overlay from "../../common/overlay/Overlay";

const SearchBarOverlay = ({
  setMarkers,
  setFocusedRegion,
  setIsOpenBusArrival,
}) => {
  // const apiUrl = Constants.expoConfig.extra.API_URL;
  const [searchWord, setSearchWord] = useState("");
  const [isOpenList, setIsOpenList] = useState(false);

  const { data: searchBusStations } = useGetSearchBusStation(searchWord);

  const debouncingSearchWord = useMemo(
    () => debouncer((value) => setSearchWord(value), 500),
    []
  );

  const onChangeText = (text) => {
    debouncingSearchWord(text);
  };

  const onPressItem = (item) => {
    setIsOpenList(false);
    setMarkers([{ ...item }]);
    setFocusedRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const onPressInput = () => {
    setIsOpenList(true);
    setIsOpenBusArrival(false);
  };

  useEffect(() => {
    if (searchBusStations) {
      setMarkers([...searchBusStations?.data?.stationList]);
    }
  }, [searchBusStations?.data?.stationList]);

  const renderItem = ({ item }) => {
    return (
      <ItemWrapper onPress={() => onPressItem(item)}>
        <ItemNameText numberOfLines={1} ellipsizeMode="tail">
          {item.stationName}
        </ItemNameText>
      </ItemWrapper>
    );
  };

  return (
    <Overlay height="70%" top="40px" xPadding="13%">
      <SearchInput
        placeholder="정류장 검색"
        onChangeText={onChangeText}
        onPressIn={() => onPressInput()}
      />

      {isOpenList && searchBusStations?.data?.busStationList?.length !== 0 && (
        <>
          <StationFlatList
            renderItem={renderItem}
            data={searchBusStations?.data?.busStationList}
            keyExtractor={(item) => item.stationId}
          />
          <CloseButton onPress={() => setIsOpenList(!isOpenList)}>
            <CloseButtonImage
              source={require("../../../assets/arrows/upArrow.png")}
            />
          </CloseButton>
        </>
      )}
    </Overlay>
  );
};

export default SearchBarOverlay;

const SearchInput = styled(TextInput)`
  width: 100%;
  height: 40px;
  background-color: gainsboro;
  border-radius: 15px;
  padding: 0 15px;
  margin-top: 10px;
`;

const StationFlatList = styled(FlatList)`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  margin-top: 45px;
`;

const ItemWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const ItemNameText = styled(Text)`
  font-size: 15px;
  width: 100%;
`;

const CloseButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 20px;
  margin-top: 5px;
  border-radius: 10px;
`;

const CloseButtonImage = styled(Image)`
  width: 15px;
  height: 15px;
`;
