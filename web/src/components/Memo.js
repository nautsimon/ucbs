import React from "react";
import FadeIn from "react-fade-in";

class Memo extends React.Component {
   render() {
    return (
        <div className="mainDiv centerRow">
        <div className="mainMarginDiv">
          <p className="pageTitle centerRow">2022-23 Memo</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="centerRow ">
              <div className="aboutLeft">
                <p className="regularTitle centerRow"><strong>TLDR</strong></p>
                <p className="centerRow">
                Our New Member Education and speaker events will now be open to the entire 
                UChicago community while taking a small cohort of 7-12 members. We are shifting 
                our focus for our upcoming cohorts from education to offering to work on real-world 
                projects (e.g., internships, part-time jobs, hackathons, grants, etc.). We have expanded 
                from our “test run” last year and now can provide far more valuable experiences to our 
                members and the broader UChicago community.
                </p>
                <br />
                <br />
                <p className="regularTitle centerRow"><strong>Full Memo</strong></p>
                <p className="centerRow" style={{justifyContent: "center"}}>
                Over the Summer, we've had many discussions regarding what we see as the end goal of our club, 
                and how that might affect our recruitment process this coming year. On selectivity, we've analyzed
                the pros and cons of a low-filtering policy compared to a selective filtering process. 
                And of the end goal of our club, we've been battling with the essential question of what we create 
                using this club. In other words, what's our value-add to the UChicago community? Are we here 
                to educate any blockchain-interested people or to create a community of serial blockchain hackers? 
                <br />
                <br />
                During our inaugural cohort last year, we defined education as our sole value-add to the community. 
                But even though our goal was to educate, we gated this education behind a selective recruitment process. 
                This represented what we now see as a misalignment in our approach. If our original goal was to educate 
                as many crypto-curious people as we could, then there should not be barriers to students accessing this 
                community. To align our application approach with this, we are opening our educational program to all 
                and also expanding the scope of the club’s offerings for cohort members. We want to build a community 
                of the most motivated, talented, and ambitious blockchain builders at UChicago so it is natural to 
                expand from being a solely educational program.
                <br />
                <br />
                But if not an educational club, what exactly are we? That is the root question we've dealt with this 
                Summer. We realized much of our curriculum from last year could be taught by YouTube and online research,
                so we forced ourselves to think deeper about how our club might be able to go beyond this, and use the sum
                of our parts to create value for our members and the broader UChicago community. After much consideration,
                we've decided that the optimal approach towards achieving our goal of building the most important technology
                community at UChicago is to focus on becoming a community of serial blockchain builders who contribute to
                real-world problems through software development, technical research, consulting, investing, and other means.
                <br />
                <br />
                In this new proposed model, we still provide education to our members, but we start defining our educational 
                process as a means toward an end, not as the goal of the club itself. Our education curriculum for the new year
                 will be primarily workshop/discussion-based, and rebranded as  "new-member education". This new-member 
                 education will provide enough basic blockchain knowledge for our cohort members to be able to contribute to 
                 real-world projects. One major change we are making is to make this new member education and corresponding 
                 speaker events open to the entire UChicago community, as in the spirit of open source we believe that education 
                 around blockchain should not be gatekept to a specific group of people. We hope that this option will provide 
                 a middle-ground for people who are blockchain-curious or aren't sure if they have the time or interest in working 
                 on real-world projects as a member of our Fall cohort. 
                <br />
                <br />
                Still, we plan to have another recruitment cycle this fall where we will seek to bring in a select group of 
                students who demonstrate a serious interest in blockchain and who we believe would be a good fit to contribute 
                to real-world projects that we will provide opportunities to contribute to. Especially given that we are making 
                our educational program entirely open now, we are thinking about this next cohort model in terms of what 
                value we can provide to them, rather than the other way around. So, let's be specific about the advantages of 
                joining this select cohort:
                <br />
                <br />
                    1. Access to real-world work and consulting opportunities in the web3 world. 
                    <br />
                    2. Funded travel to hackathons and other blockchain events
                    <br />
                    3. Employment and internship opportunities via inclusion in our resume book which is used by more than 200 blockchain companies. 
                    <br />
                    4. A 1:1 mentorship program with a more experienced student matched specifically by your interests. 
                    <br />
                    5. Inclusion in a tight-knit community of blockchain-interested people with social events throughout the year. 
                <br />
                <br />
                Working on real-world projects will be the main focus of club members following the completion of New Member Education, 
                so to this end, we plan to start with two branches: Technical and Business Development. 
                Students will apply to one of these branches, but once in the club, we hope for these groups to work together on a 
                variety of projects, bringing the best coders together with the best entrepreneurs and builders. Within the next few years, 
                our goal is to have an open online educational hub available for the world, periodic open speaker events open for 
                everyone on campus to attend, a formal blockchain startup incubator, a tight-knit community of web3 builders, and much more. 
                <br />
                <br />
                If you are unsure of which branch to apply to, technical is going to focus on everything related to software project
                development and technical research such as smart contract engineering, front/back-end engineering, and published informal
                and formal research on cryptography, distributed systems, consensus mechanisms, etc. In a more practical sense, students 
                in this area will focus on protocol development, ethical smart contract hacking (web3 security), web development, smart 
                contract consulting, and much more. The Business Development branch will focus on everything else that's not technical 
                and part of web3, such as blockchain business consulting, nontechnical academic research, informal research 
                (weekly news mailing list, Chicago Blockchain blog, etc.), startup-building competitions, investing competitions, and much more.  
                <br />
                <br />
                There are a lot of things to define, and a lot of questions on this newly-chosen path (that's where all the fun is!), 
                but we truly think there's no better path to our goal of building the most important technical club on campus. 
                We believe that with enough time and effort this club can both turn our school into a premier hub for Web3 
                innovation and start a movement that positions UChicago as one of the most important blockchain centers in the world. 
                <br />
                <br />
                Sincerely, 
                The Chicago Blockchain Board
                </p>
                <br />
            </div>
            </div>
          </FadeIn>
        </div>
      </div>
    );
   } 
}

export default Memo; 