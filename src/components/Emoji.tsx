import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { emoji: string; alt: string } } = {
    3: { emoji: "😒", alt: "meh" },
    4: { emoji: "👍", alt: "recommended" },
    5: { emoji: "🎯", alt: "superb" },
  };

  return (
    <Text boxSize={"25px"} marginTop={1} display={"block"}>
      {emojiMap[rating].emoji}
    </Text>
  );
};

export default Emoji;
