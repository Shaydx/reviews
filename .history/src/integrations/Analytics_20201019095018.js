fetch(API_URL + this.props.match.params.id)
  .then((res) => res.json())
  .then((response) => {
    this.setState({
      company: response,
    });
  });
