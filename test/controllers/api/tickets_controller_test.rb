require 'test_helper'

class Api::TicketsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tickets_index_url
    assert_response :success
  end

  test "should get create" do
    get api_tickets_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_tickets_destroy_url
    assert_response :success
  end

end
