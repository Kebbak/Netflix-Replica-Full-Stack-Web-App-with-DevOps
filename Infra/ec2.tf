# create ec2 instance in the specified subnet
resource "aws_instance" "example" {
  ami           = "ami-09e6f87a47903347c"
  instance_type = t2.micro
  key_name      = "Development"
  subnet_id     = data.aws_subnet.subnet1.id

  tags = {
    Name = "ExampleInstance"
  }
}