import { Container } from 'inversify';
import { createContext, useContext } from 'react';

const ContainerContext = createContext<Container>(null);

const useContainer = () => useContext(ContainerContext);

export { ContainerContext, useContainer };
