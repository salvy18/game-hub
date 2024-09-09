import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// This will be used when loading the games so it looks loading

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"200px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
