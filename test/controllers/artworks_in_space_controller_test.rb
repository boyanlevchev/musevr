require "test_helper"

class ArtworksInSpaceControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get artworks_in_space_create_url
    assert_response :success
  end

  test "should get destroy" do
    get artworks_in_space_destroy_url
    assert_response :success
  end
end
