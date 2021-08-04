import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './OutlinedTimeline.css';
import { Container }from "reactstrap";
import data from "./PeriodicTableJSON.json";



import { HashLink } from 'react-router-hash-link';






 

export default function OutlinedTimeline() {
  return (
    <Timeline align="alternate">

      
      <TimelineItem id="polyatomic">
        <TimelineSeparator>
          <TimelineDot  variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#phosphorouscoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
           <span class = 'element_title'> Polyatomic Non Metals < br/>The First Element Discovered : Phosphorus</span> </HashLink>< br /> 
        < br /> 
       <span class = 'element_p'> Name: Henning Brand < br />
       < br /> 
       Year: 1699 < br />
      < br /> 
        Fun Fact :  Brand was trying to create the philosopher's stone, a legendary alchemical substance that was thought to turn metal into gold. <br />
        <br />
        Other Elements included: Phosphorous, Sulfur, Selenium, ..., Oganesson
        </span>
        </TimelineContent>
      </TimelineItem>
      



     
      <TimelineItem id="diatomic">
        <TimelineSeparator>
          <TimelineDot variant="outlined" color= 'accent' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <HashLink smooth to='#diatomiccoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
           <span class='element_title2'>Diatomic Nonmetals</span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Summary: Diatomic molecules contain two atoms that are chemically bonded. When the two atoms are identical like in the oxygen molecule (O2) this composes a homonuclear diatomic molecule.< br /> 
       < br /> 
        Elements Included: hydrogen, nitrogen, <strong>oxygen</strong>, fluorine, chlorine, iodine, bromine. < br /> 
        < br /> 
        Fun Fact : Other elements can form diatomic nonmetals. diatomic molecules formed by other elements are not very stable, so their bonds are easily broken. </span>
        </TimelineContent>
      </TimelineItem>
      
      


     
      <TimelineItem id="noble">
        <TimelineSeparator>
          <TimelineDot variant="outlined" className="noble"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#noblecoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title3'>Noble Gas</span>  </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Summary: Noble Gases have full outer shells with eight Electrons.< br /> 
       < br /> 
        Elements Included: helium, neon, argon, krypton, xenon, Randon, Oganesson < br /> 
        < br /> 
        Fun Fact : William Ramsay won the Nobel Prize in 1904 for Chemistry. He first discovered Argon and Helium. < br />
        < br />
        Like a nobleman might consider it undignified to associate with commoners, noble gases tend not to react with other elements.</span>
        </TimelineContent>
      </TimelineItem>
     


      
      <TimelineItem id="alkali">
        <TimelineSeparator>
          <TimelineDot variant="outlined" className="alkali"  />
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent> 
        <HashLink smooth to='#alkaliccoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title4'>Alkali Metals </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Summary:   Alkali metals are very reactive chemicals.  They readily lose their one valence electron to form other compounds know as Ionic Compounds.< br /> 
       < br /> 
        Elements Included: lithium, sodium, potassium, rubiduim, cesium, francium. < br /> 
        < br /> 
        Fun Fact: All elements in this group occur in nature and are soft enough to cut with a knife.</span>
      </TimelineContent>
      </TimelineItem>
    

     <TimelineItem id="alkalineearth">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 
        <HashLink smooth to='#alkalineearthccoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title5'>Alkaline Earth Metals </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Summary:  When these compounds are mixed in solutions, they are likely to form solutions with a pH greater than 7. Those higher pH levels means that they are defined as "basic" or "alkaline" solutions.< br /> 
       < br /> 
        Elements Included: beryllium , magnesium , calcium , strontium , barium  and radium. < br /> 
        < br /> 
        Fun Fact: This is the second most reactive family of elements on the periodic table. </span> </TimelineContent>
      </TimelineItem>


      <TimelineItem id="metal">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#metalloidcoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title6'> Metalloids </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Summary:  forms a simple substance having properties intermediate between those of a typical metal and a typical nonmetal.< br /> 
       < br /> 
        Elements Included: boron, silicon, geramium, arsenic, antimony, terrilium, astaine. < br /> 
        < br /> 
        Fun Fact: Tthe second most abundant element in the earths crust is a metalloid; Silicon. </span>   </TimelineContent>
      </TimelineItem>

      


      <TimelineItem id="transition">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#transitioncoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title7'>Transition Metals </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'>Summary: An Element that is a partial filled d orbital with electrons and has the ability to form a stable compound with other elements. <br />
       < br /> 
        Elements Included: scandium, titanium, vanadium, chromium, manganesse... < br /> 
        < br /> 
        Fun Fact: They are paramagnetic. This means that are very weakly attracted by the poles of a magnet, but not retaining any permanent magnetism. </span>  </TimelineContent>
      </TimelineItem>
      

      <TimelineItem id="post">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector /> 
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#posttransitionccoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
          <span class='element_title8'> Post-Transition Metals </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'>Summary: a group of elements located between the transition metals and the metalloids. < br /> 
        < br /> 
        Elements Included: alluminmum, galluium, indium, tin, thallium, lead... < br /> 
        < br /> 
        Fun Fact: These elements are soft and brittle with poor mechanical strength.</span> </TimelineContent>
      </TimelineItem>



      <TimelineItem id="oga">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
        <HashLink smooth to='#ogannassoncoin'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} >
           <span class='element_title'>The Last Element Discovered Oganesson </span> </HashLink> < br /> 
        < br /> 
        <span class = 'element_p'> Orginzation: Joint Institute for Nuclear Research in Dubna, Russia < br />
       < br /> 
       Year: 2002, 2006 offically  < br />
      < br /> 
        Fun Fact : Oganesson has an unknown boiling point.</span></TimelineContent>
      </TimelineItem>
    

    </Timeline>
    

    
  );
}
