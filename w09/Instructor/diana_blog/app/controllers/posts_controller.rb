class PostsController < ApplicationController

	# GET /posts
	def index
		@posts = Post.all
	end

	# GET /posts/new
	def new
		@post = Post.new
	end

	# POST /posts
	def create
		Post.create(post_params)
		redirect_to posts_path
	end

	# GET /posts/:id
	def show
		@post = Post.find(params[:id])
	end

	# GET /posts/:id/edit
	def edit
		@post = Post.find(params[:id])
	end

	# POST /posts
	def update
		post = Post.find(params[:id])
		post.update(post_params)
		redirect_to posts_path
	end

	# DELETE /posts/:id
	def destroy
		post = Post.find(params[:id])
		post.destroy
		redirect_to posts_path
	end

	private
	# This allows us to add all params at once. We can choose which params we want to allow for mass assignment. 
		def post_params
			params.require(:post).permit(:title, :content, :image_url)
		end

end