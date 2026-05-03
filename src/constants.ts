/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ElectionPhase {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  details: string[];
  icon: string;
}

export const ELECTION_PHASES: ElectionPhase[] = [
  {
    id: 'registration',
    title: 'Voter Registration',
    dateRange: 'Ongoing (Year-round)',
    description: 'Enrolling in the electoral roll is the first step for any Indian citizen above 18.',
    details: [
      'Fill Form 6 for new registration as a general voter.',
      'Register online via NVSP.in or Voter Helpline App.',
      'Verification by Booth Level Officer (BLO) at your doorstep.',
      'Issuance of EPIC (Electors Photo Identity Card) or Voter ID.'
    ],
    icon: 'UserPlus'
  },
  {
    id: 'announcement',
    title: 'Schedule Announcement',
    dateRange: 'Approx. 45-60 days before',
    description: 'The Election Commission of India (ECI) announces the poll dates and phases.',
    details: [
      'Implementation of Model Code of Conduct (MCC).',
      'Announcement of phases for different states and constituencies.',
      'Publication of final electoral rolls.',
      'Notification for nominations.'
    ],
    icon: 'Megaphone'
  },
  {
    id: 'nomination',
    title: 'Nomination & Scrutiny',
    dateRange: 'Weeks before polling',
    description: 'Candidates file their papers and represent their parties or run independently.',
    details: [
      'Filing of nomination forms with the Returning Officer (RO).',
      'Submission of security deposit and affidavits detailing assets/criminal records.',
      'Scrutiny of nominations by the RO to check for valid entries.',
      'Withdrawal of candidature within a specified window.'
    ],
    icon: 'Users'
  },
  {
    id: 'campaign',
    title: 'Election Campaign',
    dateRange: 'Continuous until 48 hrs before',
    description: 'Parties and candidates engage with voters through rallies and manifestos.',
    details: [
      'Public rallies and door-to-door campaigning.',
      'Release of party manifestos (promises and agendas).',
      'Media coverage and debates.',
      'Silencing of campaign (Silence Period) 48 hours before close of polls.'
    ],
    icon: 'Mic2'
  },
  {
    id: 'polling',
    title: 'Polling Day',
    dateRange: 'As per ECI Schedule',
    description: 'Citizens cast their votes at designated polling booths using EVMs and VVPATs.',
    details: [
      'Check your polling station on the ECI website.',
      'Carry Voter ID or other ECI-approved identity proofs.',
      'Inking of the index finger as proof of voting.',
      'Verification of vote on the VVPAT slip (visible for 7 seconds).'
    ],
    icon: 'Vote'
  },
  {
    id: 'counting',
    title: 'Counting & Results',
    dateRange: 'Specific Result Day',
    description: 'Votes from EVMs are counted under strict supervision and results are declared.',
    details: [
      'Sealing of EVMs and storage in Strong Rooms after polling.',
      'Counting of votes at designated centers on result day.',
      'Random matching of EVM totals with VVPAT slips (in 5 booths per segment).',
      'Declaration of winners by the Returning Officer.'
    ],
    icon: 'Building2'
  }
];

export const VOTING_METHODS = [
  {
    id: 'evm-vvpat',
    title: 'EVM with VVPAT',
    description: 'The primary method of voting in India at designated polling stations.',
    steps: [
      'Identity verification by the First Polling Officer.',
      'Marking of index finger with indelible ink.',
      'Signing of the register (Form 17A).',
      'Pressing the button on the Electronic Voting Machine (EVM).',
      'Verifying the printed slip in the VVPAT window.'
    ],
    requirements: 'Voter ID or approved ID, name in Electoral Roll.',
    deadline: 'On assigned Polling Date (7 AM to 6 PM usually).'
  },
  {
    id: 'postal-ballot',
    title: 'Postal Ballot',
    description: 'Reserved for specific categories including service voters and senior citizens.',
    steps: [
      'Service voters (Armed Forces) receive ballots electronically.',
      'Available for 80+ citizens and PwD (People with Disabilities).',
      'Filling the ballot and sealing it in the provided envelope.',
      'Sending it back to the Returning Officer before counting starts.'
    ],
    requirements: 'Specific category eligibility (Service, 80+, PwD, Essential Services).',
    deadline: 'Must reach the RO before 8 AM on the day of counting.'
  },
  {
    id: 'proxy-voting',
    title: 'Proxy Voting',
    description: 'Available only for Classified Service Voters (Armed Forces).',
    steps: [
      'Appointment of a proxy voter (a resident of the constituency).',
      'Notification to the Returning Officer in Form 13F.',
      'The proxy casts the vote on behalf of the service voter at the booth.',
      'Proxy stays valid until revoked by the service voter.'
    ],
    requirements: 'Classified Service Voters only.',
    deadline: 'Proxy appointment must be completed before the poll announcement.'
  }
];

export const REGISTRATION_GUIDE = {
  eligibility: [
    { label: 'Citizenship', detail: 'Must be a citizen of India.' },
    { label: 'Age', detail: 'Must be 18 years or older on the qualifying date (Jan 1, April 1, July 1, Oct 1).' },
    { label: 'Residency', detail: 'Must be an "Ordinary Resident" in the constituency.' },
    { label: 'Disqualification', detail: 'Not of unsound mind and not disqualified due to corrupt practices/offences.' }
  ],
  methods: [
    { 
      type: 'Online (NVSP)', 
      detail: 'Fastest method via the National Voters\' Service Portal or Voter Helpline App.',
      link: 'https://www.nvsp.in'
    },
    { 
      type: 'Offline (BLO)', 
      detail: 'Submit Form 6 to your Booth Level Officer (BLO) or Electoral Registration Officer (ERO).',
      link: 'https://voters.eci.gov.in'
    },
    { 
      type: 'Voter Helpline App', 
      detail: 'Official app by ECI for easy registration and tracking of your Voter ID status.',
      link: 'https://play.google.com/store/apps/details?id=com.eci.citizen'
    }
  ]
};

export const MILESTONES = [
  { date: '2024-03-16', event: 'Schedule Announcement by ECI', phaseId: 'announcement' },
  { date: '2024-04-19', event: 'Phase 1 Polling Begins', phaseId: 'polling' },
  { date: '2024-05-20', event: 'Phase 5 Polling Begins', phaseId: 'polling' },
  { date: '2024-06-01', event: 'Final Phase of Polling', phaseId: 'polling' },
  { date: '2024-06-04', event: 'Counting of Votes & Results', phaseId: 'counting' },
  { date: '2024-06-06', event: 'Completion of Election Process', phaseId: 'counting' },
];

export const HISTORICAL_RESULTS = [
  { year: 2019, turnout: '67.4%', winner: 'NDA (BJP Majority)', electoralVotes: '353 / 543', totalVotes: '613M+' },
  { year: 2014, turnout: '66.4%', winner: 'NDA (BJP Majority)', electoralVotes: '336 / 543', totalVotes: '554M+' },
  { year: 2009, turnout: '58.2%', winner: 'UPA (INC Lead)', electoralVotes: '262 / 543', totalVotes: '417M+' },
  { year: 2004, turnout: '58.1%', winner: 'UPA (INC Lead)', electoralVotes: '218 / 543', totalVotes: '389M+' },
  { year: 1999, turnout: '59.9%', winner: 'NDA (BJP Lead)', electoralVotes: '298 / 543', totalVotes: '371M+' },
  { year: 1998, turnout: '61.9%', winner: 'NDA (BJP Lead)', electoralVotes: '252 / 543', totalVotes: '368M+' },
];

export const FAQS = [
  {
    question: "Do I need a Voter ID card to vote?",
    answer: "While having a Voter ID (EPIC) is ideal, it is not mandatory if your name is on the electoral roll. You can use ECI-approved alternatives like Aadhaar Card, PAN Card, Driving License, or Passport to vote."
  },
  {
    question: "How can I check if my name is in the Voter List?",
    answer: "Visit the ECI Voters Service Portal (voters.eci.gov.in) and use the 'Search in Electoral Roll' feature with your details or EPIC number."
  },
  {
    question: "What is VVPAT?",
    answer: "Voter Verifiable Paper Audit Trail (VVPAT) is an independent system attached to the EVM that allows voters to verify that their vote was cast correctly. It shows a slip of paper with the candidate's name and symbol for 7 seconds."
  }
];
