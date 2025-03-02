    @import url(https://fonts.googleapis.com/css?family=Varela+Round);
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

    $profileBg:#fff;
    $skillsBg:#3d3e42;
    $profileColor:#9099a0;
    $skillsColor:#9099a0; 
    $linkColor:#66cc99;
    $boldColor:#4a4e51;
    $time:0.6s;

    @mixin breakpoint($point) {
      @if $point == papa-bear {
        @media (max-width: 1500px)  { @content; }
      }
      @if $point == mama-bear {
        @media (max-width: 1200px)  { @content; }
      }
      @if $point == brother-bear {
        @media (max-width: 850px)  { @content; }
      }
      @else if $point == baby-bear {
        @media (max-width: 450px)  { @content; }
      }
    }

    *, *::after, *::before {
      box-sizing:border-box;
    }

    html,body {
      height: 100%;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      font-size:16px;
      line-height:1.5em;
    }
    a{color:$linkColor; text-decoration:none;}
    .clearfix::after, .clearfix::before {
      content: " ";
      display: table;
    }
    .clearfix::after{clear:both;}
    .bold {color:$boldColor; font-weight:400;}

    .resume-wrapper {
      position:relative;
      text-align:center;
      height:100%;
    }

    .container {
      min-height:600px;
    } 

    .profile {
      background:$profileBg;
      width:40%;
      float:left;
      color:$profileColor;
      @include breakpoint(brother-bear) { width: 100%; }
      .name-wrapper {
        float:left;
        width:60%;
      }
      h1 {
        font-size:2.5em;
        text-align:left;
        font-family: 'Varela Round', sans-serif;
        color:$boldColor;
        text-transform:uppercase;
        line-height:1em;
        padding-top:40px; 
        @include breakpoint(mama-bear) {
           padding-top:20px;
        }
        @include breakpoint(baby-bear) {
          font-size:1.8em;  
          padding-top:20px;
        } 
      }
      li {
          margin-bottom:10px;
        }
      .picture-resume-wrapper {
        width:40%;
        display:block;
        float:left;
        @include breakpoint(mama-bear) {
           width:100%;
        }
      }
      .picture-resume {
        width:220px;
        height:220px;
        background-size:cover;
        border-radius:50%;
        margin-right:0px;
        display:table;
        position:relative;
        vertical-align:middle;
        span {
            display:table-cell;
            vertical-align: middle;
            position:relative;
            margin:0 auto;
            z-index:10;
           text-align:center
        }
        img {
          border-radius:50%;
          width:130px;
          @include breakpoint(papa-bear) {
            width:80px;
          }
          @include breakpoint(mama-bear) {
            width:120px;
            height:120px;
          }
        }
        @include breakpoint(papa-bear) {
          width:150px;
          height:150px;
        }
        @include breakpoint(mama-bear) {
          width:200px;
          height:200px;
        }
         @include breakpoint(baby-bear) { width:180px;height:180px; } 
      }
      .contact-info{
        margin-top:100px;
        font-weight:300;
        @include breakpoint(mama-bear) {margin-top:70px; } 
        @include breakpoint(baby-bear) { margin-top:50px; } 
      }
      .list-titles {
        float:left;
        text-align:left;
        font-weight:600;
        width:40%;
        color:$boldColor;
      }
      .list-content{
        float:left;
        width:60%;
        text-align:left;
        font-weight:300;
      }
      .contact-presentation {
        text-align:left;
        font-weight:300;
        margin-top:100px;
        margin-bottom:100px;
        @include breakpoint(mama-bear) {margin-top:70px;margin-bottom:70px; } 
        @include breakpoint(brother-bear) {margin-top:50px;margin-bottom:50px; } 
        
      }
      svg {
        width:100%;
        position:absolute;
        top:0;
        left:0;
        //display:none;
      }

      .st0, .st1 {
        fill:#66cc99;
      }

    }
    .experience {
      background:$skillsBg;
      width:60%;
      float:left;
      position:relative;
      color:$skillsColor;
      font-weight:300;
      min-height:100%;
      min-height:100vh;
      @include breakpoint(brother-bear) { width: 100%; } 
      h3.experience-title {
        color:$linkColor;
        text-align:left;
        text-transform:uppercase;
        font-size:1.2em;
        margin-bottom:20px;
        font-weight:400;
      }
      .company-wrapper {
        width:30%;
        float:left;
        text-align:left;
        padding-right:5%;
        margin-bottom:60px;
        @include breakpoint(baby-bear) {width:100%; margin-bottom:20px;} 
      }
      .job-wrapper {
        width:70%;
        float:left;
        text-align:left;
        padding-right:5%;
        margin-bottom:60px;
        @include breakpoint(baby-bear) {width:100%;margin-bottom:40px;} 
      }
      .experience-title {
          color:white;
          margin-bottom:15px;;
        }
    }

    .section-padding {
     padding:60px 60px 40px 40px;
     @include breakpoint(brother-bear) { padding:80px 15% 40px 10%; }
     @include breakpoint(baby-bear) { padding:40px 10% 20px 5%; }
    }

    .section-wrapper {
      width:50%;
      float:left;
      text-align:left;
      color:$skillsColor;
      font-weight:300;
      margin-bottom:20px;
      @include breakpoint(baby-bear) {width:100%;}
      &:nth-child(3){ 
        padding-right:8%;
      }
      h3.section-title {
        color:$linkColor;
        text-align:left;
        text-transform:uppercase;
        font-size:1.2em;
        margin-bottom:20px;
        font-weight:400;
      }
      .skill-percentage {
        margin-bottom:10px;
        position:relative;
        &::after {
          content:"";
          width:100%;
          height:6px;
          background:$boldColor;
          display:block;
          margin-top:3px;
        }
        &::before{
          content:"";
          height:6px;
          background:$linkColor;
          position:absolute;
          margin-top:3px;
          bottom:0;
        }
        &:nth-child(1)::before {width:80%;animation: skill_1 $time ease;}
        &:nth-child(2)::before {width:90%; animation: skill_2 $time ease;} 
        &:nth-child(3)::before {width:50%;animation: skill_3 $time ease;}
        &:nth-child(4)::before {width:60%;animation: skill_4 $time ease;}
        &:nth-child(5)::before {width:70%;animation: skill_5 $time ease;}
        &:nth-child(6)::before {width:70%;animation: skill_6 $time ease;}
        &:nth-child(7)::before {width:70%;animation: skill_6 $time ease;}
      }
      
    }

    @keyframes skill_1 {from {width:0%;}to {width:80%;}}
    @keyframes skill_2 {from {width:0%;}to {width:90%;}}
    @keyframes skill_3 {from {width:0%;}to {width:50%;}}
    @keyframes skill_4 {from {width:0%;}to {width:60%;}}
    @keyframes skill_5 {from {width:0%;}to {width:70%;}}  
    @keyframes skill_6 {from {width:0%;}to {width:70%;}}
    @keyframes skill_7 {from {width:0%;}to {width:70%;}}
