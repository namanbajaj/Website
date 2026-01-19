import React from "react";

import "./class.css"

export default function Class({ classlist, urls }: { classlist: string[], urls: string[] }) {
  return (
    <section id="ClassItem">
      {classlist.map((data, index) => (
        <>
          <div className="introtext classintro"><h2>{data}</h2></div>
          <div className="class_data">
            <a className="btn" href={urls[index]} target="_blank">Class Link</a>
          </div>
          <br />
          <div className="introtext classitemintro summary_intro"><h3>Summary</h3></div>
          <div className="summary_text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod turpis blandit placerat tincidunt. Cras non dui et velit porttitor auctor non in tellus. Donec metus leo, malesuada in gravida sit amet, mollis dignissim dolor. Integer gravida massa quis suscipit tincidunt. In laoreet dignissim orci at molestie. Nulla euismod pellentesque leo ac ornare. Nullam gravida sagittis tellus sed tincidunt. Morbi volutpat convallis nulla ac tempor. Nulla facilisi. Suspendisse sit amet nisl sollicitudin, vehicula elit in, euismod quam. In tempus volutpat velit iaculis venenatis.  Pellentesque dapibus nec turpis eu sagittis. Curabitur vitae magna elementum, ullamcorper lacus eu, tempus augue. Ut volutpat mollis dui at tincidunt. Nulla tortor eros, pulvinar non consectetur eget, facilisis vel ex. Praesent fringilla est justo, sit amet bibendum velit laoreet nec. Phasellus ac laoreet metus. Proin id volutpat sem. Donec fringilla lectus et tellus maximus ornare ut sit amet dolor. Integer sit amet cursus purus. Duis a dignissim ipsum, eget posuere elit. Nulla fringilla dolor blandit orci congue, sed vestibulum velit cursus.  Nulla facilisi. Ut fringilla risus eget sem condimentum, eget cursus quam cursus. Maecenas et convallis odio. Nunc cursus diam id tincidunt auctor. Nullam eu imperdiet lorem. Duis ac viverra nisi. Sed eget libero maximus, gravida mauris sed, varius nisi. Cras eu lectus metus.  Duis tortor felis, ultrices in fermentum ullamcorper, ornare sit amet purus. Quisque quis ullamcorper diam, ac porta sapien. Sed id risus ut nunc volutpat dignissim a eget lacus. Vivamus accumsan dapibus elementum. Curabitur ut turpis ante. Praesent volutpat viverra purus. Praesent hendrerit nisl vel nulla molestie pellentesque. Vestibulum finibus congue est. Nulla posuere urna vel magna porta, eu bibendum justo feugiat. Donec volutpat condimentum aliquam. Nam lacinia enim sit amet fermentum dictum. Curabitur scelerisque lorem sit amet rhoncus malesuada. Aliquam sit amet erat sagittis, feugiat nulla eu, fringilla elit.  Nullam vitae quam ut odio imperdiet fermentum vitae ac nisi. Cras sollicitudin iaculis efficitur. Integer in dolor in nunc eleifend porttitor sed id augue. Donec diam elit, sollicitudin at vestibulum luctus, ultricies quis diam. Nam quis est elementum, pharetra dolor id, condimentum metus. Suspendisse pellentesque vitae massa nec posuere. In venenatis non ligula quis dapibus. Ut laoreet lectus et urna rhoncus imperdiet. Suspendisse aliquam nisl quis turpis consectetur tincidunt. Sed lobortis sapien sapien, at tincidunt turpis ultricies eget. Vestibulum vitae iaculis est. Sed tincidunt nulla non sem lacinia posuere vel sit amet ex. Vivamus non nisl ornare, malesuada magna sit amet, fermentum felis. In placerat metus ante, sit amet congue quam ultrices id. Curabitur in odio tincidunt, pellentesque nisl sed, egestas ligula. 
          </div>
          <br />
          <div className="introtext classitemintro"><h3>Languages, Techs, & Tools</h3></div>
          <br />
          <div className="introtext classitemintro"><h3>Projects/Classwork</h3></div>
        </>
      ))}
    </section>
  );
}