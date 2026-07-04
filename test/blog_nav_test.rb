# frozen_string_literal: true

require "minitest/autorun"
require "yaml"

class BlogNavTest < Minitest::Test
  BLOG_URL = "https://epon-wang.github.io/fungus-field/"

  def setup
    @blog_page = File.read(File.expand_path("../_pages/blog.md", __dir__))
    @front_matter = YAML.safe_load(@blog_page.match(/\A---\n(.*?)\n---/m)[1])
    @header = File.read(File.expand_path("../_includes/header.liquid", __dir__))
  end

  def test_blogs_nav_item_declares_external_target
    assert_equal "Blogs", @front_matter.fetch("title")
    assert_equal true, @front_matter.fetch("nav")
    assert_equal "/blog/", @front_matter.fetch("permalink")
    assert_equal BLOG_URL, @front_matter.fetch("nav_link")
  end

  def test_header_prefers_explicit_nav_link
    assert_includes @header, "p.nav_link"
    assert_match(/assign url = p\.nav_link/, @header)
  end

  def test_old_blog_listing_is_not_rendered
    refute_includes @blog_page, "post-list"
    refute_includes @blog_page, "paginator.posts"
    assert_includes @blog_page, BLOG_URL
  end
end
