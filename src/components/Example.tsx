import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Example = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-0 md:grid-cols-4 gap-2">
      {data?.map((item, index) => (
        <Card key={index}>
          <Image src={item.src} height={450} width={300} alt=" Film" />
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} px={10} pt={20} size={16}>
              {item.name}
            </Text>
          </Group>
          <Badge>SU</Badge>
        </Card>
      ))}
    </div>
  );
};

export default Example;
