// src/components/Home.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImageUploader from './ImageUploader';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
`;

const Home = () => {
  return (
    <HomeContainer>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        欢迎来到背景去除器
      </motion.h1>
      <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        只需将您的图像拖放到下方并删除背景即可！
      </motion.p>
      <ImageUploader />
    </HomeContainer>
  );
};

export default Home;
