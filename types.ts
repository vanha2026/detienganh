// ============ ENUMS ============

export enum Role {
  // Roles cho hệ thống thi
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
  
  // Roles cho StuChat (AdminPanel, Login)
  MEMBER = 'member',
  DEPUTY = 'deputy',
  LEADER = 'leader'
}

// ============ USER ============

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  role: Role;
  status?: 'online' | 'offline' | 'busy';
  isApproved?: boolean; // Đã được duyệt chưa
  createdAt?: Date;
}

// ============ QUESTION & OPTIONS ============

export interface QuestionOption {
  letter: string;
  text: string;
  textWithUnderline?: string;
  isCorrect?: boolean;
}

export interface SectionInfo {
  letter: string;
  name: string;
  points: string;
}

export interface Question {
  number: number;
  text: string;
  type: 'multiple_choice' | 'writing' | 'unknown';
  options: QuestionOption[];
  correctAnswer: string | null;
  section?: SectionInfo;
  part?: string;
  passage?: string;
}

// ============ EXAM SECTION ============

export interface ExamSection {
  name: string;
  description: string;
  points: string;
  readingPassage?: string;
  questions: Question[];
}

// ============ EXAM DATA (for parsing) ============

export interface ExamData {
  title: string;
  timeLimit?: number;
  sections: ExamSection[];
  questions: Question[];
  answers: { [key: number]: string };
}

// ============ EXAM (stored in Firebase) ============

export interface Exam {
  id: string;
  title: string;
  description?: string;
  timeLimit: number;
  questions: Question[];
  sections: ExamSection[];
  answers: { [key: number]: string };
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ============ ROOM ============

export interface Room {
  id: string;
  code: string;
  examId: string;
  examTitle: string;
  teacherId: string;
  teacherName: string;
  status: 'waiting' | 'active' | 'closed';
  startTime?: Date;
  endTime?: Date;
  timeLimit: number;
  allowLateJoin: boolean;
  showResultAfterSubmit: boolean;
  shuffleQuestions: boolean;
  maxAttempts: number;
  totalStudents: number;
  submittedCount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// ============ STUDENT INFO ============

export interface StudentInfo {
  id: string;
  name: string;
  className?: string;
  studentId?: string;
}

// ============ SUBMISSION ============

export interface Submission {
  id: string;
  roomId: string;
  roomCode: string;
  examId: string;
  student: StudentInfo;
  answers: { [questionNumber: number]: string };
  score: number;
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  percentage: number;
  startedAt?: Date;
  submittedAt?: Date;
  duration: number;
  status: 'in_progress' | 'submitted' | 'graded';
}

// ============ ROOM WITH EXAM ============

export interface RoomWithExam extends Room {
  exam: Exam;
}

// ============ LEADERBOARD ============

export interface LeaderboardEntry {
  rank: number;
  student: StudentInfo;
  score: number;
  percentage: number;
  duration: number;
  submittedAt?: Date;
}
