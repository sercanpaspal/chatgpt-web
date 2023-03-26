import {
  Container,
} from '@chakra-ui/react';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonials from '../../components/Testimonials';

export default function Landing() {
  return (
    <Container maxW="6xl">
      <Header />
      <Features />
      <Testimonials />
      <Footer />
    </Container>
  );
}
