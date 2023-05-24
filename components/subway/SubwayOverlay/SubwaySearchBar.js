import React, { useEffect, useMemo, useState } from "react";
import { debouncer } from "../../../utils/debouncing";
import Input from "../../common/Input/Input";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useGetSubwayStation } from "../../../hooks/queries/subway/useGetSubwayStation";
import styled from "styled-components";
import Overlay from "../../common/overlay/Overlay";
import { subwayApis } from "../../../axios/subway";

import { css } from "styled-components";

import { TbCircle1Filled } from "react-icons/tb";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SubwaySearchBar({
  setMarkers,
  setFocusedRegion,
  setStationName,
  setIsOpenOverlay,
}) {
  const [searchWord, setSearchWord] = useState(null);
  const [isOpenList, setIsOpenList] = useState(false);

  const { data: subwayStationData } = useGetSubwayStation(searchWord);
  // console.log("subwayStationData", subwayStationData);

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
    setStationName(item.stationName);
  };

  const onPressInput = () => {
    setIsOpenList(true);
    setIsOpenOverlay((prev) => {
      return { ...prev, routeTime: false, subwayArrival: false };
    });
    console.log("onPressInput");
  };

  const onPressOutInput = () => {
    setIsOpenOverlay((prev) => {
      return { ...prev, routeTime: true, subwayArrival: false };
    });
    console.log("onPressOutInput");
  };



  // if({subwayLine} = '1호선') {
  //   iconname = "numeric-1-circle";
  // }
  // else if({subwayLine} = '2호선') {
  //   iconname = "numeric-2-circle";
  // }



  useEffect(() => {
    if (subwayStationData) {
      setMarkers([...subwayStationData?.data?.stationList]);
    }
  }, [subwayStationData?.data?.stationList]);

  const renderItem = ({ item }) => {

      if((item.subwayLine) == "1호선") {
        item.iconname = "numeric-1-circle";
        item.iconcolor="#0052A4"
      }
      else if((item.subwayLine) == "2호선") {
        item.iconname = "numeric-2-circle";
        item.iconcolor="#00A84D"
      }
      else if((item.subwayLine) == "3호선") {
        item.iconname = "numeric-3-circle";
        item.iconcolor="#EF7C1C"
      }

      else if((item.subwayLine) == "4호선") {
        item.iconname = "numeric-4-circle";
        item.iconcolor="#00A4E3"
      }

      else if((item.subwayLine) == "5호선") {
        item.iconname = "numeric-5-circle";
        item.iconcolor="#996CAC"
      }

      else if((item.subwayLine) == "6호선") {
        item.iconname = "numeric-6-circle";
        item.iconcolor="#CD7C2F"
      }

      else if((item.subwayLine) == "7호선") {
        item.iconname = "numeric-7-circle";
        item.iconcolor="#747F00"
      }

      else if((item.subwayLine) == "8호선") {
        item.iconname = "numeric-8-circle";
        item.iconcolor="#E6186C"
      }

      else if((item.subwayLine) == "9호선") {
        item.iconname = "numeric-9-circle";
        item.iconcolor="#BDB092"
      }


    // switch(item.subwayLine)
    // {
    //   case "1호선":
    //     item.iconname = "numeric-1-circle";
    //     item.iconcolor = "#0052A4";
    //   case "2호선":
    //     item.iconname = "numeric-2-circle";
    //     item.iconcolor = "#00A84D";
    //   case "3호선":
    //     item.iconname = "numeric-3-circle";
    //     item.iconcolor = "#EF7C1C";
    //   case "4호선":
    //     item.iconname = "numeric-4-circle";
    //     item.iconcolor = "#00A4E3";
    //   case "5호선":
    //     item.iconname = "numeric-5-circle";
    //     item.iconcolor = "#996CAC";
    //   case "6호선":
    //     item.iconname = "numeric-6-circle";
    //     item.iconcolor = "#CD7C2F";
    //   case "7호선":
    //     item.iconname = "numeric-7-circle";
    //     item.iconcolor = "#747F00";
    //   case "8호선":
    //     item.iconname = "numeric-8-circle";
    //     item.iconcolor = "#E6186C";
    //   case "9호선":
    //     item.iconname = "numeric-9-circle";
    //     item.iconcolor = "#BDB092";
    // }

    return (
      <ItemWrapper
        onPress={() => onPressItem(item)}
        subwayLine={item.subwayLine}
      >
        {/*아이콘 추가*/}
        <Icon name={item.iconname} size={18} color={item.iconcolor}/>

        <ItemNameText
          numberOfLines={1}
          ellipsizeMode="tail"
          subwayLine={item.subwayLine}
        >
          {item.stationName}
        </ItemNameText>
        
      </ItemWrapper>
    );
  };

  return (
    <Overlay height="70%" top="40px" xPadding="13%">
      <Input
        placeholder="정거장 검색"
        onChangeText={onChangeText}
        onPressIn={onPressInput}
        onPressOut={onPressOutInput}
      />
      {isOpenList && subwayStationData?.data.stationList?.length !== 0 && (
        <>
          <StationFlatList
            renderItem={renderItem}
            data={subwayStationData?.data.stationList}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<></>}
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
}

export default SubwaySearchBar;

const StationFlatList = styled(FlatList)`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  margin-top: 55px;
`;

const ItemWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const ItemNameText = styled(Text)`
  font-size: 15px;
  width: 100%;
  padding-left: 5px;
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
