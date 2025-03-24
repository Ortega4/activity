import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";
import Goals from "./Goals";

function GoalList() {
  return (
    <ul>
      <li>
        <Goals title="I want to write components without looking at notes">
          right now, it is taking me a while to complete this, but by the end of
          the book, I want to apply react like a professional
        </Goals>
      </li>
      <li>
        <Goals title="I want to be able retain my knowledge by creating personal projects">
          so far my tool belt is limited, but with react, i can do more with
          projects
        </Goals>
      </li>
      <li>
        <Goals title="apply what i read into pratice">
          {" "}
          its easy to read over the textbook and look at the code, but the true
          learning begins when applying the concepts to practice.
        </Goals>
      </li>
    </ul>
  );
}
export default GoalList;
