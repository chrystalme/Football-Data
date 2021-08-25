import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import style from '../style/about.module.css';

const About = () => (
  <>
    <Nav />
    <div>
      <p className={style}>
        Football, also called association football or soccer,
        game in which two teams of 11 players, using any part
        of their bodies except their hands and arms, try to maneuver
        the ball into the opposing team’s goal.
        Only the goalkeeper is permitted to handle the ball and
        may do so only within the penalty area surrounding the goal.
        The team that scores more goals wins.

      </p>
      <p className={style}>
        Football is the world’s most popular ball game in numbers of participants
        and spectators. Simple in its principal rules and essential equipment,
        the sport can be played almost anywhere,
        from official football playing fields (pitches) to gymnasiums,
        streets, school playgrounds, parks, or beaches.
        Football’s governing body, the Fédération Internationale de Football
        Association (FIFA),
        estimated that at the turn of the 21st century
        there were approximately 250 million football players
        and over 1.3 billion people “interested” in football;
        in 2010 a combined television audience of more than 26
        billion watched football’s premier tournament,
        the quadrennial month-long World Cup finals.

      </p>
      <p className={style}>
        History
        The early years Modern football originated in Britain in the 19th century.
        Since before medieval times, “folk football” games had been played
        in towns and villages according to local customs and with a minimum of rules.
        Industrialization and urbanization, which reduced the amount of leisure time
        and space available to the working class, combined with a history of legal
        prohibitions against particularly violent and destructive forms of folk
        football to undermine the game’s status from the early 19th century onward.
        However, football was taken up as a winter game between residence houses at
        public (independent) schools such as Winchester, Charterhouse, and Eton.
        Each school had its own rules; some allowed limited handling of the ball and
        others did not.
        The variance in rules made it difficult for public
        schoolboys entering university to continue playing except with former
        schoolmates. As early as 1843 an attempt to standardize and codify the rules
        of play was made at the University of Cambridge, whose students joined most
        public schools in 1848 in adopting these “Cambridge rules,” which were further
        spread by Cambridge graduates who formed football clubs.
        In 1863 a series of meetings involving clubs from metropolitan London
        and surrounding counties produced the printed rules of football,
        which prohibited the carrying of the ball.
        Thus, the “handling” game of rugby remained outside the newly formed
        Football Association (FA).
        Indeed, by 1870 all handling of the ball except by the goalkeeper was
        prohibited by the FA.
      </p>
    </div>
    <Footer />
  </>
);

export default About;
