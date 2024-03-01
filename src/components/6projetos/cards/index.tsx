import React from "react";
import styled from "styled-components";

interface CardProps {
  image: string;
  title: string;
  text: string;
  link: string;
  techs: string[];
  tags: string[];
}

const CardContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  background-color: #1e2735;
  border-radius: 4%;
  margin: 2%;

  &:hover {
    background-color: #1a79e5;
    transition: 1s;
    color: white;
    box-shadow: 5px 5px #fff;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-right: 16px;
  border-radius: 4%;
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const CardText = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #b3bdc1;
  &:hover {
    margin-bottom: 8px;
    color: white;
    transition: 1s;
  }
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  color: #333;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
`;

const Cards: React.FC<CardProps> = ({ image, text, tags, title, link }) => {
  return (
    <CardContainer>
      <a target="_blank" rel="noreferrer" href={link}>
        <CardImage src={image} alt={image} />
      </a>
      <CardContent>
        <CardText>{title}</CardText>
        <div>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <CardText>{text}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Cards;
