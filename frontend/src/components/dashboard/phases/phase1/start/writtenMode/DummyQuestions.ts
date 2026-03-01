// ==========================================
// INSTRUCTIONS
// ==========================================

import type { QuestionProp } from "../../../../../../interface/interface";

export const DummyInstructions = [
  {
    id: "ins_comprehension",
    section: "Comprehension",
    text: "Read the passage below carefully and answer the questions that follow.",
  },
  {
    id: "ins_nearest_meaning",
    section: "Vocabulary",
    text: "Choose the option nearest in meaning to the word underlined.",
  },
  {
    id: "ins_oral_english",
    section: "Oral English",
    text: "From the options, choose the word that has the same vowel sound as the one represented by the letters underlined.",
  },
];

// ==========================================
// PASSAGES (Complete – 4 Paragraphs Each)
// ==========================================

export const DummyPassages = [
  {
    id: "passage_1",
    title: "The Value of Discipline",
    content: `
    Paragraph 1:
  Discipline is often described as the foundation of success in every human endeavour. 
  It is the ability of an individual to control his actions, emotions, and desires in 
  order to achieve a greater goal. Many successful people attribute their achievements 
  not merely to intelligence or luck, but to consistent discipline.

  Paragraph 2:
 In schools, discipline plays a vital role in shaping the character of students. 
 A disciplined student attends classes regularly, completes assignments on time, 
 and respects school authorities. Such behaviour creates an environment that 
 encourages learning and mutual respect among students and teachers.

 Paragraph 3:
 However, discipline is not limited to academic settings. In the workplace, 
 employees who demonstrate discipline are often more productive and reliable. 
 They meet deadlines, follow company policies, and maintain professional conduct. 
 These qualities make them valuable assets to their organisations.

 Paragraph 4:
 Although discipline may sometimes seem restrictive, it ultimately leads to 
 greater freedom and opportunities. By developing self-control and focus, 
 individuals are better equipped to overcome challenges and achieve long-term success.
    `,
  },

  {
    id: "passage_2",
    title: "Technology and Modern Communication",
    content: `
    Paragraph 1:
Technology has dramatically transformed the way people communicate in the modern world. 
In the past, letters were the primary means of long-distance communication, and it 
often took weeks for messages to reach their destinations. Today, information can 
be shared instantly through emails, messaging applications, and social media platforms.

Paragraph 2:
This rapid advancement has made communication more convenient and efficient. 
Businesses can now conduct meetings virtually, reducing travel expenses and saving time. 
Families separated by distance can maintain close relationships through video calls 
and instant messaging services.

Paragraph 3:
Despite these advantages, technology also presents certain challenges. 
Excessive reliance on digital communication may reduce face-to-face interactions, 
leading to weakened social bonds. Additionally, issues such as cybercrime and 
privacy breaches have become growing concerns in the digital age.

Paragraph 4:
Therefore, while technology offers immense benefits, it must be used responsibly. 
Individuals and organisations should strive to balance digital communication with 
personal interaction to maintain healthy and meaningful relationships.
    `,
  },
];

// ==========================================
// QUESTIONS
// ==========================================

export const DummyQuestions: QuestionProp[] = [
  // ======================================
  // COMPREHENSION – PASSAGE 1
  // ======================================

  {
    id: 1,
    section: "Comprehension",
    instructionId: "ins_comprehension",
    passageId: "passage_1",
    question:
      "According to the passage, what is described as the foundation of success?",
    options: ["Intelligence", "Luck", "Discipline", "Wealth"],
    answer: "Discipline",
  },

  {
    id: 2,
    section: "Comprehension",
    instructionId: "ins_comprehension",
    passageId: "passage_1",
    question: "Why are disciplined employees considered valuable assets?",
    options: [
      "They demand higher salaries",
      "They work without supervision",
      "They are productive and reliable",
      "They avoid company policies",
    ],
    answer: "They are productive and reliable",
  },

  // ======================================
  // COMPREHENSION – PASSAGE 2
  // ======================================

  {
    id: 3,
    section: "Comprehension",
    instructionId: "ins_comprehension",
    passageId: "passage_2",
    question:
      "What was the primary means of long-distance communication in the past?",
    options: ["Emails", "Letters", "Video calls", "Social media"],
    answer: "Letters",
  },
  {
    id: 4,
    section: "Comprehension",
    instructionId: "ins_comprehension",
    passageId: "passage_2",
    question: "One major concern mentioned about digital communication is:",
    options: [
      "High electricity cost",
      "Limited accessibility",
      "Cybercrime and privacy breaches",
      "Slow message delivery",
    ],
    answer: "Cybercrime and privacy breaches",
  },

  // ======================================
  // NEAREST IN MEANING
  // ======================================

  {
    id: 5,
    section: "Vocabulary",
    instructionId: "ins_nearest_meaning",
    passageId: null,
    question:
      "Choose the option nearest in meaning to the word underlined: The manager was very *meticulous* in his planning.",
    options: ["Careless", "Thorough", "Lazy", "Angry"],
    answer: "Thorough",
  },
  {
    id: 6,
    section: "Vocabulary",
    instructionId: "ins_nearest_meaning",
    passageId: null,
    question:
      "Choose the option nearest in meaning to the word underlined: Her explanation was *ambiguous*.",
    options: ["Clear", "Confusing", "Brief", "Interesting"],
    answer: "Confusing",
  },

  // ======================================
  // ORAL ENGLISH
  // ======================================

  {
    id: 7,
    section: "Oral English",
    instructionId: "ins_oral_english",
    passageId: null,
    question:
      "Choose the word that has the same vowel sound as the one underlined in 'b**ea**t'.",
    options: ["Fit", "Feet", "Fat", "Fate"],
    answer: "Feet",
  },
  {
    id: 8,
    section: "Oral English",
    instructionId: "ins_oral_english",
    passageId: null,
    question:
      "Choose the word that has the same vowel sound as the one underlined in 'c**a**p'.",
    options: ["Cart", "Cut", "Cat", "Cot"],
    answer: "Cat",
  },
];















// selectedAnswer: 2 correctAnswer: Discipline
// Start.tsx:63 selectedAnswer: 2 correctAnswer: They are productive and reliable
// Start.tsx:63 selectedAnswer: 1 correctAnswer: Letters
// Start.tsx:63 selectedAnswer: 2 correctAnswer: Cybercrime and privacy breaches
// Start.tsx:63 selectedAnswer: 1 correctAnswer: Thorough
// Start.tsx:63 selectedAnswer: 1 correctAnswer: Confusing
// Start.tsx:63 selectedAnswer: 1 correctAnswer: Feet
// Start.tsx:63 selectedAnswer: 2 correctAnswer: Cat
// Start.tsx:131 Final Report: 
// {totalQuestions: 8, totalCorrect: 0, totalWrong: 8, totalUnanswered: 0, scorePercentage: 0, …}
// results
// : 
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// scorePercentage: 0
// sectionBreakdown: {Comprehension: {…}, Vocabulary: {…}, Oral English: {…}}
// strengths: []
// totalCorrect: 0
// totalQuestions: 8
// totalUnanswered: 0
// totalWrong: 8
// weaknesses: (3) ['Comprehension', 'Vocabulary', 'Oral English']
// [[Prototype]]: Object