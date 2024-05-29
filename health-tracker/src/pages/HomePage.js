// pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import '../css/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const redirectTo = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <h2>
            Welcome to your Health Tracker App! Your path to wellness starts here.
            Set goals, track progress, and achieve greatness. Let's make every step
            count towards a healthier you!
          </h2>
        </div>
      </div>
      <br />
      <div className="options">
        <Card
          imgSrc={require('../assets/exercises.png')}
          altText="exercise"
          title="Exercise"
          description="Exercise regularly to stay healthy and happy. Enter a muscle you want to train and get detailed instructions!"
          onClick={() => redirectTo('exercise')}
        />
        <Card
          imgSrc={require('../assets/nutrition.png')}
          altText="nutrition"
          title="Nutrition"
          description="Eat well, feel well: prioritize balanced nutrition for optimal health. Type in a food name to know your calories intake!"
          onClick={() => redirectTo('nutrition')}
        />
        <Card
          imgSrc={require('../assets/calories.png')}
          altText="calories"
          title="Calories"
          description="Calories count: balance intake with activity for a healthy weight. Enter an exercise to know the calories burned!"
          onClick={() => redirectTo('calories')}
        />
        <Card
          imgSrc={require('../assets/bmi_bg.png')}
          altText="bmi"
          title="BMI"
          description="Check BMI: a simple tool for understanding your weight status."
          onClick={() => redirectTo('bmi')}
        />
      </div>
    </div>
  );
};

export default HomePage;
