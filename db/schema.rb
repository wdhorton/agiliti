# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151124172251) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_memberships", force: :cascade do |t|
    t.integer  "person_id",                       null: false
    t.integer  "account_id",                      null: false
    t.boolean  "owner",           default: false
    t.boolean  "admin",           default: false
    t.boolean  "project_creator", default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_index "account_memberships", ["account_id"], name: "index_account_memberships_on_account_id", using: :btree
  add_index "account_memberships", ["person_id"], name: "index_account_memberships_on_person_id", using: :btree

  create_table "accounts", force: :cascade do |t|
    t.string   "name",                          null: false
    t.string   "plan",       default: "free"
    t.string   "status",     default: "active"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "people", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token"
    t.string   "company"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name",                             null: false
    t.boolean  "public",           default: false
    t.datetime "start_time",                       null: false
    t.integer  "account_id",                       null: false
    t.string   "description"
    t.string   "profile_content"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.integer  "iteration_length", default: 1
  end

  add_index "projects", ["account_id"], name: "index_projects_on_account_id", using: :btree

  create_table "stories", force: :cascade do |t|
    t.string   "name",                                  null: false
    t.string   "story_type",                            null: false
    t.string   "current_state", default: "unscheduled"
    t.integer  "project_id",                            null: false
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.integer  "estimate",      default: -1
    t.text     "description"
  end

  add_index "stories", ["project_id"], name: "index_stories_on_project_id", using: :btree

end
