import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { Bullet } from "../Bullet";
import { CarImage, CarImageWrapper, Container, ImageBullets } from "./styles"


type ImageSlider = {
  imageUrl: {
    id: string;
    photo: string;
  }[];
}

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider = ({ imageUrl }: ImageSlider) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index;
    setImageIndex(index);
  });


  return (
    <Container>
      <ImageBullets>
        { imageUrl.map((item, index) => (
          <Bullet
            key={String(item.id)} 
            active={index === imageIndex} 
          />
        ))}
      </ImageBullets>
      

        <FlatList 
          data={imageUrl}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CarImageWrapper>
              <CarImage 
                source={{ uri: item.photo }}
                resizeMode="contain"
              />
           </CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </Container>
  )
}