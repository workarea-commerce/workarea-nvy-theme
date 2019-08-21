Dragonfly.app(:workarea).configure do
  processor :swatch_thumb do |content|
    content.process!(:encode, :jpg, Workarea.config.jpg_encode_options)
    content.process!(:thumb, '32x32')
    content.process!(:optim)
  end

  processor :small_thumb do |content|
    content.process!(:encode, :jpg, Workarea.config.jpg_encode_options)
    content.process!(:thumb, '104x')
    content.process!(:optim)
  end

  processor :large_thumb do |content|
    content.process!(:encode, :jpg, Workarea.config.jpg_encode_options)
    content.process!(:thumb, '276x')
    content.process!(:optim)
  end

  processor :detail do |content|
    content.process!(:encode, :jpg, Workarea.config.jpg_encode_options)
    content.process!(:thumb, '472x')
    content.process!(:optim)
  end

  processor :zoom do |content|
    content.process!(:encode, :jpg, Workarea.config.jpg_encode_options)
    content.process!(:thumb, '944x')
    content.process!(:optim)
  end
end
