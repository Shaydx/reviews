const API_URL = "https://sandbox.api.nps.today/reviews/analytics?orgId=";

function getAnalytics(id) {
  fetch(API_URL + id)
    .then((res) => res.json())
    .then((response) => {
      this.setState({
        company: response,
      });
    });
}
