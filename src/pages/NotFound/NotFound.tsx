// react-router-dom
import { Link } from "react-router-dom";

// mantine
import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";

// images
import image from "/icons/404.svg";

// styles
import classes from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Что-то не так...</Title>
          <Text c="dimmed" size="lg">
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы
            ошиблись в вводе адреса или страница была перемещена на другой URL.
            Если вы считаете, что это ошибка, обратитесь в службу поддержки.
          </Text>
          <Link to={"/"}>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Вернуться на главную страницу
            </Button>
          </Link>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};
