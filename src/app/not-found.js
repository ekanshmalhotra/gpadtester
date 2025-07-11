'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { FaSadTear } from 'react-icons/fa';

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  font-family: sans-serif;
  background: #f4f1ea;
  color: #333;

  h1 {
    font-size: 6rem;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #fd8e3c;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: #ff7400;
    }
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #888;
  }
`;

export default function NotFoundPage() {
  return (
    <Wrapper>
      <div className="icon">
        <FaSadTear />
      </div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link href="/">← Go back home</Link>
    </Wrapper>
  );
}