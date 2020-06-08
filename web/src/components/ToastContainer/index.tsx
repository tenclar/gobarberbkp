import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastMessagesProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastMessagesProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateZ(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
