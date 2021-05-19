import Board from './Board'
import styled from 'styled-components/macro'
import PropTypes from "prop-types";
import Main from "./Main";

Boards.propTypes = {
    openTodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired,
    inProgressTodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired,
    doneTodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired,
    onAdvance: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired

}

export default function Boards({ onAdvance, onRemove, openTodos, inProgressTodos, doneTodos }) {

  return (
    <Main>
      <Board
        title="Todo"
        todos={openTodos}
        onAdvance={onAdvance}
        onRemove={onRemove}
      />
      <Board
        title="Doing"
        todos={inProgressTodos}
        onAdvance={onAdvance}
        onRemove={onRemove}
      />
      <Board title="Done" todos={doneTodos} onRemove={onRemove} />
    </Main>
  )
}

