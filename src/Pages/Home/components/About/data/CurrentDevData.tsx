import React from "react";
import { Link } from "react-router-dom";
import { CurrentDevelopmentDataModel } from "../model/AboutModels";

export const cd_data: CurrentDevelopmentDataModel[] = [
  {
    key: 4,
    main_bullet: 'Working on acquisition of AWS Certified Solutions Architect',
  },
  {
    key: 1,
    main_bullet: 'Developing Android Apps using Kotlin',
    sub_bullets: [
      <span>Google Play Store Link: <a href='https://play.google.com/store/apps/dev?id=5692626467682406083'>NBaj</a></span>,
      `Current development: Learning how to build apps using Jetpack Compose instead of XML`
    ]
  },
  {
    key: 2,
    main_bullet: 'Learning game/graphics development',
    sub_bullets: [
      <span>For gaming related projects and development, <Link to="/games">see gaming portion of website</Link></span>,
      `Current development: Learning OpenGL`
    ]
  },
  {
    key: 3,
    main_bullet: 'Improving and maintaining currently published projects and apps',
    sub_bullets: [
      <span>Most recently updated project(s): <a href={window.location.href}>This website</a>, <a href='https://play.google.com/store/apps/dev?id=5692626467682406083'>Android app updates</a></span>
    ]
  },
]