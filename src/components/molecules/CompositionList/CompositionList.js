import React from "react";
import { connect } from "react-redux";
import { fetchCompositions } from "../../../actions/compositionActions";
import Composition from "../../molecules/Composition/Composition";
import CompForm from "../../molecules/CompForm/CompForm";

class CompositionList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCompositions());
  }

  render() {
    const { error, loading, compositions } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        <CompForm />
        {compositions.map(
          ({ id, year, title, heading, content, video, link }) => (
            <Composition
              id={id}
              year={year}
              title={title}
              heading={heading}
              content={content}
              video={video}
              link={link}
              key={id}></Composition>
          )
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  compositions: state.compositions.items,
  loading: state.compositions.loading,
  error: state.compositions.error,
});

export default connect(mapStateToProps)(CompositionList);
