import { View, Text } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Details: " + id }} />
      <Text>ProductDetailScreen for id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
