import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// This will be used when loading the games so it looks loading

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
