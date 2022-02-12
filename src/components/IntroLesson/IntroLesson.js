import React from "react";

function IntroLesson(props) {
const {
    lessonOneHeader,
    lessonOneIntro,
    lessonOneSubtitle,
    lessonOneTitle
} = props;
    return(
<>
<section className="introLesson__content">
    <h2 className="introlesson__title">{lessonOneHeader}</h2>
    <h3 className="introlesson__subtitle">{lessonOneTitle}</h3>
    <p className="introlesson__text">{lessonOneIntro}</p>
    <h3 className="introlesson__subtitle">{lessonOneSubtitle}</h3>
</section>
</>
    )
}
export default IntroLesson;