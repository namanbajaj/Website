import React from "react";
import { ExperienceCardItem } from "../model/ExperienceModels";
import { Link } from "react-router-dom";

export const data: ExperienceCardItem[] = [
  {
    id: 7,
    title: 'Prudential',
    subtitle: 'Infrastructure Engineer',
    date: 'August 2026 - Current',
    icon: 'prudential',
  },

  {
    id: 6,
    title: 'Prudential',
    subtitle: 'Cloud Engineer',
    date: 'January 2026 - August 2026',
    icon: 'prudential',
    description:
      <ul className='r_list'>
        <li>Full stack and infrastructure engineer</li>
        <li>Current development:
          <ul className='r_list'>
            <li>Implemented an automated VPC CIDR reconciliation and alerting pipeline integrating Infoblox IPAM, Wiz API, AWS Lambda, EventBridge, and S3 to generate monthly reports and send automated MS Teams notifications</li>
            <li>Automated infrastructure decommissioning by writing Python scripts to programmatically delete ~10,000 legacy CodePipeline stacks and building custom AWS Nuke Lambda functions for regional cleanup</li>
            <li>Added a redeployment retry feature to the PruCloud Console UI (React, FastAPI) after conducting architectural deep dives into AWS Step Functions, Lambda, and DynamoDB execution flows</li>
            <li>Built a dynamic ServiceNow support intake form using JavaScript Script Includes and workflows to automate Incident and Change ticket creation for cloud support requests</li>
            <li>Automated the nuking and bootstrapping of an AWS account using CloudFormation nested stacks, Step Functions, and EventBridge, integrating event buses for automated failure reporting to Teams</li>
            <li>Migrated core IAM and infrastructure repositories to GitHub and AMPv2, writing Python scripts to auto-generate placeholder IAM roles to resolve deployment dependencies</li>
            <li>Resolved critical SAST and SCA security vulnerabilities across multiple core cloud infrastructure repositories using Apiiro and updating package dependencies</li>
            <li>Created comprehensive technical documentation on Confluence covering CIDR reconciliation, StackSets architecture, Azure repo breakouts, and DevOps deployer tools</li>
          </ul>
        </li>
        <li>Technologies used:
          <ul className='r_list'>
            <li>AWS (CloudFormation, Lambda, Step Functions, DynamoDB, EventBridge, CodePipeline, CodeBuild, S3, SNS, CloudWatch, Route 53, IAM)</li>
            <li>Python (boto3, FastAPI, requests, ipaddress)</li>
            <li>React (TypeScript, CSS, HTML)</li>
            <li>ServiceNow (Catalogue Builder, Script Includes, Workflows), Infoblox (IPAM, WAPI)</li>
            <li>DevOps & Security Tools (GitHub, Apiiro, Confluence, Jira, AWS CLI)</li>
          </ul>
        </li>
        <li>Methodologies used: Cloud Engineering, Infrastructure as Code (IaC), Automation & Scripting, CI/CD & Repository Migration, Security Compliance (SAST/SCA), On-Call & Incident Management</li>
      </ul>,
  },

  {
    id: 5,
    title: 'Prudential',
    subtitle: 'Platform Engineer',
    date: 'July 2025 - January 2026',
    icon: 'prudential',
    description:
      <ul className='r_list'>
        <li>Platform Engineer, worked as a Salesforce Developer and Quality Engineer</li>
        <li>Development Work:
          <ul className="r_list">
            <li>Implemented automatic ADA issue detection tool (ANDI - developed by SSA) and implemented it into our automated testing suite to allow developers to allow developers to test for ADA issues without reaching out to external team</li>
            <li>Created Batch Apex Class that pulled data from Salesforce and made callout to external API to update stale data in external AWS database</li>
            <li>Integrated Agentforce AI with the Genesys Live Chat window using Lightning Messaging Service (LMS), allowing AI responses to be displayed directly to agents</li>
            <li>Built a "Pending Policy" search flow using OmniStudio (OmniScripts, Integration Procedures, Data Mappers) to handle Knowledge-Based Authentication (KBA) for customers</li>
            <li>Automated call logging by building a feature that parses AI-generated notes from Genesys and automatically saves them to Salesforce Customer Interactions</li>
            <li>Refactored legacy Integration Procedures into Apex classes for better error handling and supported the Omnicore migration by updating regression test suites</li>
            <li>Created technical documentation (Confluence) for the team on setting up SFDX and performing ADA testing</li>
            <li>Did significant learning on Salesforce Trailheads, including Superbadges and various modules and trails: <Link to="https://www.salesforce.com/trailblazer/namanbajaj" target='_blank' rel="noopener noreferrer">Trailheads</Link></li>
          </ul>
        </li>
        <li>Technologies used:
          <ul className="r_list">
            <li>Apex (Batch Apex, Triggers, SOQL, REST/SOAP, Unit Testing)</li>
            <li>OmniStudio (OmniScripts, FlexCards, Integration Procedures, Data Mappers)</li>
            <li>Salesforce Frontend (LWC, Aura Components, Visualforce, LMS)</li>
            <li>AI & Integration (Agentforce, Genesys Platform)</li>
            <li>Test Automation (Java, Selenium, Jest, XPath, sa11y)</li>
            <li>Accessibility Tools (ANDI, axe DevTools, WAVE, NVDA/JAWS)</li>
            <li>DevOps (Copado, Jenkins, Git/BitBucket, VSCode, SFDX, Postman)</li>
          </ul>
        </li>
        <li>Methodologies used: Agile/Scrum, Batch processing, ADA/Accessibility compliance, CI/CD, Regression testing</li>
      </ul>
  },

  {
    id: 4,
    title: 'Prudential',
    subtitle: 'Full Stack Developer',
    date: 'July 2024 - July 2025',
    icon: 'prudential',
    description:
      <ul className='r_list'>
        <li>Full stack developer, worked on internal tool ETL used by Prudential business teams</li>
        <li>Development Work:
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
      </ul>,
  },

  {
    id: 3,
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
      </div>,
    icon: 'rutgers',
  },

  {
    id: 2,
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