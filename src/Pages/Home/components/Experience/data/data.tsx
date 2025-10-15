import React from "react";
import { ExperienceCardItem } from "../model/ExperienceModels";

export const data: ExperienceCardItem[] = [
  {
    id: 4,
    title: 'Prudential',
    subtitle: 'Global Technology Rotation Associate',
    date: 'July 2024 - Current',
    description:
      <div>
        <div>
          <div className='session_name'>First Rotation (7/2024 - 7/2025)</div>
          <div className='line' />
          <ul className='r_list'>
            <li>Full stack developer working on internal tool ETL used by Prudential business teams</li>
            <li>Current development:
              <ul className='r_list'>
                <li>Created microservices in Java (Spring Boot) and Python (FastAPI & Flask)</li>
                <li>Added functionality and features to Angular application</li>
                <li>Worked in AWS to enable new features and functionality</li>
                <li>Worked on internal custom built chatbot (Streamlit) intended to help users navigate our application</li>
              </ul>
            </li>
            <li>Technologies used:
              <ul className='r_list'>
                <li>Java (Spring Boot, Gradle, Multithreading)</li>
                <li>Python (psycopg2, Pytest, FastAPI, Uvicorn, boto3, Flask, Streamlit)</li>
                <li>Angular (Typescript, HTML, SCSS, Jasmine/Karma)</li>
                <li>PostgreSQL (pgAdmin4), Microsoft SQL Server</li>
                <li>AWS (Lambda, CloudWatch, ECR, ECS, DynamoDB, Secretes Manager, Systems Manager, Parameter Store, SQS)</li>
                <li>Postman, Jenkins, Git (BitBucket)</li>
              </ul>
            </li>
            <li>Methodologies used: Agile, CI/CD, Microservices, Containerization, UI/UX, Data Migration</li>
          </ul>
        </div>

        <div>
          <div className='session_name'>Second Rotation (7/2025 - Current)</div>
          <div className='line' />
          <ul className='r_list'>
            <li>Platform Engineer working as a Salesforce Developer and Quality Engineer working on improving Test Automation</li>
            <li>Current development:
              <ul className="r_list">
                <li>Created Batch Apex Class that pulled data from Salesforce and made callout to external API to update stale data in external database</li>
                <li>Created automatic ADA detection tool and implemented it into our teams automated testing suite</li>
              </ul>
            </li>
            <li>Technologies used:
              <ul className="r_list">
                <li>Apex (Batch Apex, HTTP callouts, unit testing)</li>
                <li>HTML, CSS, JavaScript (Lightning Web Components)</li>
                <li>Java (Selenium)</li>
                <li>Postman, Jenkins, Git (BitBucket), VSCode, SFDX</li>
              </ul>
            </li>
            <li>Methodologies used: Batch processing, platform development, test automation, unit testing</li>
          </ul>
        </div>
      </div>,
    icon: 'prudential',
    do_multi_page: true
  },

  {
    id: 2,
    title: 'Rutgers University - New Brunswick',
    subtitle: 'Math Grader',
    date: 'Jan 2023 - May 2024',
    description:
      <div>
        <div className='session_name'>Spring 2024 Session</div>
        <div className='line' />
        <ul className='r_list'>
          <li>Grading for 1 class of 01:640:244 - Differential Equations for Engineering and Physics</li>
          <li>Grading homework for 70+ students</li>
        </ul>
        <br />
        <div className='session_name'>Fall 2023 Session</div>
        <div className='line' />
        <ul className='r_list'>
          <li>Grading for 2 classes of 01:640:252 - Elementary Differential Equations</li>
          <li>Grading homework for 90+ students</li>
        </ul>
        <br />
        <div className='session_name'>Summer 2023 Session</div>
        <div className='line' />
        <ul className='r_list'>
          <li>Graded for 1 class of 01:640:252 - Elementary Differential Equations</li>
          <li>Graded homework for 15+ students</li>
        </ul>
        <br />
        <div className='session_name'>Spring 2023 Session</div>
        <div className='line' />
        <ul className='r_list'>
          <li>Graded for 3 classes of 01:640:300 - Introduction to Mathematical Reasoning</li>
          <li>Graded homework for 50+ students</li>
        </ul>
      </div>
    ,
    icon: 'rutgers',
  },

  {
    id: 3,
    title: 'Prudential',
    subtitle: 'Software Engineering Intern',
    date: 'Jun 2023 - Aug 2023',
    description:
      <ul className="r_list">
        <li>Worked as a front end software engineer on the Financial Wellness application</li>
        <li>Used programming tools and technologies such as Angular, Typescript, JavaScript, HTML/SCSS, NodeJS, Git, Adobe Experience Manager, and Karma</li>
        <li>Assisted with implementation of Adobe Launch Tag Management in Financial Wellness application to track user impressions and events with 80% more information and 60% more accuracy than previous tag manager</li>
        <li>Played a vital role in ensuring the efficacy of the transition by making necessary code adjustments and enhancements</li>
        <li>Collaborated closely with the Quality Assurance (QA) team, addressing issues promptly and guaranteeing the accuracy and comprehensiveness of data sent to back end services</li>
        <li>Developed and implemented a dynamic script enabling real-time application of modifications to Adobe Launch code within the Financial Wellness application, resulting in streamlined development and accelerated testing processes</li>
        <li>Contributed to creation of over 10+ Angular components in custom Prudential library to allow sand boxing of implemented services</li>
        <li>Created routes service in Financial Wellness application to calculate 50+ possible page routes</li>
      </ul>,
    icon: 'prudential',
  },

  {
    id: 1,
    title: 'Dow Jones',
    subtitle: 'Finance Intern',
    date: 'Jun 2021 - Aug 2021',
    description:
      <ul className="r_list">
        <li>Finance Intern on Dow Jones FSMR (Financial Systems and Management Reporting) Team</li>
        <li>Worked with SAP S/4 Hana ERP System including SAP Fiori, SAP GUI, BPC, and Microsoft Analysis for Office for Reporting</li>
        <li>Built automation model in Excel for detailed testing and validation of FX Impact at the line item level, involved pulling 25+ reports to build model</li>
        <li>Contributed to 15+ finance projects, such as Business Area implementation, roll forward balances, FX validation</li>
        <li>5+ presentations, including presentation on how to retain Wall Street Journal subscribers' post-graduation presented to CEO and CFO, and presentation of Excel Automation Project presented company-wide</li>
      </ul>,
    icon: 'dowjones',
  }
]